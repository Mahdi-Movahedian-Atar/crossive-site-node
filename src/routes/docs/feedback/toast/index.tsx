import {
  $,
  component$,
  useContextProvider,
  useSignal,
  useStore,
} from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { ToggleButtonGroup } from '~/components/toggle-button-group'
import { AddToast, Toast, ToastContext } from '~/components/toast'
import { Button } from '~/components/button'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  const toasts = useSignal([])
  useContextProvider(ToastContext, toasts)

  const showToast = $(async () => {
    toasts.value = await AddToast(toasts.value, 'This is a success message!', 'success', 'text', 1000);
  });

  return (
    <div>
      <button onClick$={showToast}>Show Success Toast</button>
      <Toast alignX={'right'} alignY={'bottom'}/>
    </div>
  );
});`

export default component$(() => {
  const props = useStore({
    x: 'bottom',
    y: 'right',
    variant: 'solid',
    color: 'primary',
  })

  const toasts = useSignal<any>([])
  useContextProvider(ToastContext, toasts)

  const showToast = $(async () => {
    // @ts-ignore
    toasts.value = await AddToast(
      toasts.value,
      'Toast',
      // @ts-ignore
      props.color,
      props.variant,
      2000
    )
  })

  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Toast</h1>
        <div
          class={'flex flex-col items-center justify-center gap-2 p-2'}
          q:slot={'e'}
        >
          <Button class={'m-10'} onClick={showToast}>
            <p class={'p-2'}>Make some toast</p>
          </Button>
          {/*@ts-ignore*/}
          <Toast alignX={props.x} alignY={props.y} />
          <ToggleButtonGroup
            exclusive={true}
            members={[
              {
                id: 0,
                value: true,
                color: 'primary',
                onChange: $(() => {
                  props.color = 'primary'
                }),
              },
              {
                id: 1,
                value: false,
                color: 'success',
                onChange: $(() => {
                  props.color = 'success'
                }),
              },
              {
                id: 2,
                value: false,
                color: 'error',
                onChange: $(() => {
                  props.color = 'error'
                }),
              },
              {
                id: 3,
                value: false,
                color: 'warning',
                onChange: $(() => {
                  props.color = 'warning'
                }),
              },
              {
                id: 4,
                value: false,
                color: 'accent',
                onChange: $(() => {
                  props.color = 'accent'
                }),
              },
            ]}
          >
            <p q:slot={'0'} class={'p-2'}>
              primary
            </p>
            <p q:slot={'1'} class={'p-2'}>
              success
            </p>
            <p q:slot={'2'} class={'p-2'}>
              error
            </p>
            <p q:slot={'3'} class={'p-2'}>
              warning
            </p>
            <p q:slot={'4'} class={'p-2'}>
              accent
            </p>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            exclusive={true}
            members={[
              {
                id: 0,
                value: true,
                onChange: $(() => {
                  props.variant = 'solid'
                }),
              },
              {
                id: 1,
                value: false,
                onChange: $(() => {
                  props.variant = 'outlined'
                }),
              },
              {
                id: 2,
                value: false,
                onChange: $(() => {
                  props.variant = 'text'
                }),
              },
            ]}
          >
            <p q:slot={'0'} class={'p-2'}>
              solid
            </p>
            <p q:slot={'1'} class={'p-2'}>
              outlined
            </p>
            <p q:slot={'2'} class={'p-2'}>
              text
            </p>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            exclusive={true}
            members={[
              {
                id: 0,
                value: true,
                onChange: $(() => {
                  props.x = 'right'
                }),
              },
              {
                id: 1,
                value: false,
                onChange: $(() => {
                  props.x = 'center'
                }),
              },
              {
                id: 2,
                value: false,
                onChange: $(() => {
                  props.x = 'left'
                }),
              },
            ]}
          >
            <p q:slot={'0'} class={'p-2'}>
              right
            </p>
            <p q:slot={'1'} class={'p-2'}>
              center
            </p>
            <p q:slot={'2'} class={'p-2'}>
              left
            </p>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            exclusive={true}
            members={[
              {
                id: 0,
                value: true,
                onChange: $(() => {
                  props.y = 'bottom'
                }),
              },
              {
                id: 1,
                value: false,
                onChange: $(() => {
                  props.y = 'center'
                }),
              },
              {
                id: 2,
                value: false,
                onChange: $(() => {
                  props.y = 'top'
                }),
              },
            ]}
          >
            <p q:slot={'0'} class={'p-2'}>
              bottom
            </p>
            <p q:slot={'1'} class={'p-2'}>
              center
            </p>
            <p q:slot={'2'} class={'p-2'}>
              top
            </p>
          </ToggleButtonGroup>
        </div>

        <CodeBlock q:slot={'c'} code={code} language={'typescript'} />

        <div q:slot={'p'}>
          <h1 class={'flex place-content-center p-6 text-4xl font-bold'}>
            ToastMessage
          </h1>
          <table class={'border-b-width border-b-primary-0'}>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>message</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  The text message to be displayed in the toast.{' '}
                  <strong>(Required)</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <code>variant</code>
                </td>
                <td>
                  <code>'solid' | 'outlined' | 'text'</code>
                </td>
                <td>
                  Defines the appearance of the toast. Default is{' '}
                  <code>'solid'</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>color</code>
                </td>
                <td>
                  <code>
                    'success' | 'error' | 'warning' | 'accent' | 'primary'
                  </code>
                </td>
                <td>
                  Defines the color theme of the toast. Default is{' '}
                  <code>'primary'</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>duration</code>
                </td>
                <td>
                  <code>number</code>
                </td>
                <td>
                  Duration in milliseconds for which the toast is visible before
                  auto-dismissing. Default is <code>1000</code>.
                </td>
              </tr>
            </tbody>
          </table>
          <h1
            class={
              'flex place-content-center border-t-width border-t-primary-0 p-6 text-4xl font-bold'
            }
          >
            Props
          </h1>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>contentComponent</code>
                </td>
                <td>
                  <code>{'Component{ toastMessage: ToastMessage }'}</code>
                </td>
                <td>
                  A custom component to render the content of the toast. By
                  default, it shows an icon and a message.
                </td>
              </tr>
              <tr>
                <td>
                  <code>alignX</code>
                </td>
                <td>
                  <code>'left' | 'center' | 'right'</code>
                </td>
                <td>
                  Horizontal alignment of the toast container. Default is{' '}
                  <code>'right'</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>alignY</code>
                </td>
                <td>
                  <code>'top' | 'center' | 'bottom'</code>
                </td>
                <td>
                  Vertical alignment of the toast container. Default is{' '}
                  <code>'top'</code>.
                </td>
              </tr>
            </tbody>
          </table>
          <h1
            class={
              'flex place-content-center border-t-width border-t-primary-0 p-6 text-4xl font-bold'
            }
          >
            ToastContentProps
          </h1>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>id</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  A unique identifier for each toast message.{' '}
                  <strong>(Required)</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <code>toastMessage</code>
                </td>
                <td>
                  <code>ToastMessage</code>
                </td>
                <td>
                  The toast message object containing the content, color,
                  variant, and duration.
                </td>
              </tr>
            </tbody>
          </table>
          <h1
            class={
              'flex place-content-center border-t-width border-t-primary-0 p-6 text-4xl font-bold'
            }
          >
            AddToast Function Parameters
          </h1>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>toasts</code>
                </td>
                <td>
                  <code>ToastContentProps[]</code>
                </td>
                <td>
                  An array of existing toasts to which the new toast will be
                  added. <strong>(Required)</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <code>message</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  The message to be displayed in the toast.{' '}
                  <strong>(Required)</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <code>color</code>
                </td>
                <td>
                  <code>
                    'success' | 'error' | 'warning' | 'accent' | 'primary'
                  </code>
                </td>
                <td>
                  Optional. Color theme of the toast. Default is{' '}
                  <code>'primary'</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>variant</code>
                </td>
                <td>
                  <code>'solid' | 'outlined' | 'text'</code>
                </td>
                <td>
                  Optional. Appearance of the toast. Default is{' '}
                  <code>'solid'</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>duration</code>
                </td>
                <td>
                  <code>number</code>
                </td>
                <td>
                  Optional. Duration in milliseconds for which the toast is
                  visible. Default is <code>1000</code>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/feedback/toast/`
const name:string = 'Toast'

export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: `Corrosive Components - ${name}`,
  meta: [
    {
      name: 'description',
      content: `Explore the ${name} component in Corrosive Components. Easily create modals, pop-ups, and other overlay elements for your Qwik projects.`,
    },
    // Open graph
    {
      property: 'og:title',
      content: `Corrosive Components - ${name} Component`,
    },
    {
      property: 'og:description',
      content: `Learn how to implement the ${name} component from Corrosive Components to create modals, pop-ups, and other overlay elements in your Qwik applications.`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: url,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: `Corrosive Components - ${name} Component`,
    },
    {
      name: 'twitter:description',
      content: `Implement the ${name} component from Corrosive Components to create versatile overlay elements like modals and pop-ups in your Qwik projects.`,
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: url,
    },
  ],
};