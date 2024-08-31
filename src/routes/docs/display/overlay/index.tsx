import { $, component$, useStore } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { Button } from '~/components/button'
import { ToggleButtonGroup } from '~/components/toggle-button-group'
import { Overlay,type OverlayProps } from '~/components/overlay'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  return (
    <div>
      <Overlay open={true} color="primary" opacity={0.7}>
        <div style={{ margin: 'auto', color: 'white' }}>
          This is an overlay.
        </div>
      </Overlay>
      <Button>
        <div>This content overlays.</div>
      </Button>
    </div>
  )
})`

export default component$(() => {
  const props = useStore<OverlayProps>({
    open: false,
    color: 'primary',
  })

  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Overlay</h1>
        <div
          class={'flex flex-col items-center justify-center gap-2 p-2'}
          q:slot={'e'}
        >
          <Overlay {...props} opacity={0.1} closeOnClick={true}>
            <div
              class={
                'm-auto flex w-3/5 flex-wrap justify-between self-center rounded-corner rounded-corner border-width border-primary-0 bg-secondary-0 p-5 align-middle'
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Overlay>
          <Button
            class={'m-32 w-32'}
            onClick={$(() => (props.open = !props.open))}
          >
            <p class={'p-2'}>Show</p>
          </Button>
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
        </div>

        <CodeBlock q:slot={'c'} code={code} language={'typescript'} />

        <table q:slot={'p'}>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>open</td>
              <td>boolean</td>
              <td>Determines if the overlay is visible. (default: `false`)</td>
            </tr>
            <tr>
              <td>color</td>
              <td>'success' | 'error' | 'warning' | 'accent' | 'primary'</td>
              <td>
                Color variant of the overlay background. (default: `'primary'`)
              </td>
            </tr>
            <tr>
              <td>opacity</td>
              <td>number</td>
              <td>Opacity level of the overlay background. (default: `0.5`)</td>
            </tr>
            <tr>
              <td>closeOnClick</td>
              <td>boolean</td>
              <td>
                Determines if the overlay should close when clicked. (default:
                `true`)
              </td>
            </tr>
            <tr>
              <td>class</td>
              <td>string</td>
              <td>
                Custom CSS class for the overlay container. (default:
                `undefined`)
              </td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>
                {
                  "Inline styles for the overlay container. (default: `{ height: '100%', width: '100%', position: 'fixed', display: 'flex', inset: 0, zIndex: 99999 }`)"
                }
              </td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: 'Corrosive Components - Overlay Component',
  meta: [
    {
      name: 'description',
      content: 'Explore the Overlay component in Corrosive Components. Easily create modals, pop-ups, and other overlay elements for your Qwik projects.',
    },
    // Open graph
    {
      property: 'og:title',
      content: 'Corrosive Components - Overlay Component',
    },
    {
      property: 'og:description',
      content: 'Learn how to implement the Overlay component from Corrosive Components to create modals, pop-ups, and other overlay elements in your Qwik applications.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: `${import.meta.env.PUBLIC_URL}/docs/display/overlay/`,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Corrosive Components - Overlay Component',
    },
    {
      name: 'twitter:description',
      content: 'Implement the Overlay component from Corrosive Components to create versatile overlay elements like modals and pop-ups in your Qwik projects.',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: `${import.meta.env.PUBLIC_URL}/docs/display/overlay/`,
    },
  ],
};
