import hljs from 'highlight.js'
import styles from './style.css?inline'
import {
  $,
  component$,
  useContextProvider,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from '@builder.io/qwik'
import { Button } from '../../../../../corrosive-components'
import { AddToast, Toast, ToastContext } from '~/components/toast'
export const CodeBlock = component$<{ code: string; language: string }>(
  ({ code, language }) => {
    const toasts = useSignal<any>([])
    useContextProvider(ToastContext, toasts)

    useStyles$(styles)

      // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
      const codeElement = document.getElementById(`code-${language}`)
      if (codeElement) {
        hljs.highlightElement(codeElement)
      }
    })

    return (
      <div
        style={{ position: 'relative', width: '100%' }}
        class={
          'flex w-full rounded-corner border-width border-secondary-2 bg-secondary-2 p-5'
        }
      >
        <Toast alignX={'right'} alignY={'bottom'} />
        <Button
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            padding: '0.5rem',
          }}
          variant={'text'}
          onClick={$(async () => {
            navigator.clipboard.writeText(code)
            toasts.value = await AddToast(
              toasts.value,
              'Copied',
              'success',
              'solid',
              1000
            )
          })}
        >
          <i
            style={{
              mask: 'url(/icons/copy.svg)',
              maskSize: 'cover',
              color: 'var(--primary-0)',
            }}
            class={'cc-icon-large'}
          />
        </Button>
        <pre class={'flex w-full rounded-corner'}>
          <code id={`code-${language}`} class={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    )
  }
)
