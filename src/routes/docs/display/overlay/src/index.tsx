import { component$ } from '@builder.io/qwik'
import { CodeBlock } from '~/components/site-components/code-block'

const cssCode = `.cc-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}

.cc-overlay-primary {
  background-color: var(--primary-0);
}

.cc-overlay-success {
  background-color: var(--success-0);
}

.cc-overlay-error {
  background-color: var(--error-0);
}

.cc-overlay-warning {
  background-color: var(--warning-0);
}

.cc-overlay-accent {
  background-color: var(--accent-0);
}`

const tsCode = `${'export interface OverlayProps {'}
  open?: boolean
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  opacity?: number
  closeOnClick?: boolean
  class?: string
  style?: CSSProperties
}
export const Overlay = component$<OverlayProps>(
  ({
    class: className,
    style = {
      height: '100%',
      width: '100%',
      position: 'fixed',
      display: 'flex',
      inset: 0,
      zIndex: 99999,
    },
    open = false,
    color = 'primary',
    opacity = 0.5,
    closeOnClick = true,
  }) => {
    const isOpen = useSignal(false)

    return (
      <div
        class={className}
        style={isOpen.value != open ? style : { width: 0, height: 0 }}
        onClick$={$(() => closeOnClick && (isOpen.value = !isOpen.value))}
      >
        {isOpen.value != open && (
          <div
            ${'class={`cc-overlay cc-overlay-${color}`}'}
            style={{ opacity: opacity }}
          />
        )}
        {isOpen.value != open && <Slot />}
      </div>
    )
  }
)`

export default component$(() => {
  return (
    <div class={'mt-2 grid w-full grid-cols-1 gap-2 lg:grid-cols-2'}>
      <div>
        <h1 class={'m-4 text-6xl font-bold'}>TypeScript</h1>
        <CodeBlock code={tsCode} language={'typescript'} />
      </div>
      <div>
        <h1 class={'m-4 text-6xl font-bold'}>CSS</h1>
        <CodeBlock code={cssCode} language={'css'} />
      </div>
    </div>
  )
})
