import { $, component$, useStore } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { Button } from '~/components/button'
import { Expandable, type ExpandableProps } from '~/components/expandable'
import { ToggleButtonGroup } from '~/components/toggle-button-group'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  return (
    <Button>
      <Expandable
        visible={true}
        color="success"
        variant="solid"
        direction="down"
        maxHeight={150}
      >
        <div>This content expands.</div>
      </Expandable>
    </Button>
  )
})`

export default component$(() => {
  const props = useStore<ExpandableProps>({
    visible: false,
    direction: 'down',
    variant: 'solid',
    color: 'primary',
  })

  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Expandable</h1>
        <div
          class={'flex flex-col items-center justify-center gap-2 p-2'}
          q:slot={'e'}
        >
          <Button
            class={'m-32 w-32'}
            onClick={$(() => (props.visible = !props.visible))}
          >
            <p class={'p-2'}>{props.visible ? 'Hide' : 'Show'}</p>
            <Expandable {...props}>
              Expandable Expandable Expandable Expandable Expandable Expandable
              Expandable Expandable Expandable
            </Expandable>
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
                  props.direction = 'down'
                }),
              },
              {
                id: 1,
                value: false,
                onChange: $(() => {
                  props.direction = 'left'
                }),
              },
              {
                id: 2,
                value: false,
                onChange: $(() => {
                  props.direction = 'right'
                }),
              },
              {
                id: 3,
                value: false,
                onChange: $(() => {
                  props.direction = 'up'
                }),
              },
            ]}
          >
            <p q:slot={'0'} class={'p-2'}>
              down
            </p>
            <p q:slot={'1'} class={'p-2'}>
              left
            </p>
            <p q:slot={'2'} class={'p-2'}>
              right
            </p>
            <p q:slot={'3'} class={'p-2'}>
              up
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
              <td>class</td>
              <td>string</td>
              <td>
                Custom CSS class for the component. (default: `undefined`)
              </td>
            </tr>
            <tr>
              <td>visible</td>
              <td>boolean</td>
              <td>
                Determines if the expandable content is visible. (default:
                `false`)
              </td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>
                {
                  "Inline styles for the expandable container. (default: `{ height: 'fit-content', width: 'fit-content' }`)"
                }
              </td>
            </tr>
            <tr>
              <td>color</td>
              <td>'success' | 'error' | 'warning' | 'accent' | 'primary'</td>
              <td>
                Color variant for the expandable component. (default:
                `'primary'`)
              </td>
            </tr>
            <tr>
              <td>variant</td>
              <td>'solid' | 'outlined' | 'text'</td>
              <td>
                Visual style of the expandable component. (default:
                `'outlined'`)
              </td>
            </tr>
            <tr>
              <td>maxHeight</td>
              <td>number</td>
              <td>
                Maximum height of the expandable content in pixels. (default:
                `100`)
              </td>
            </tr>
            <tr>
              <td>direction</td>
              <td>'down' | 'up' | 'left' | 'right'</td>
              <td>
                Direction in which the content expands. (default: `'down'`)
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
  title: 'Corrosive Components - Expandable Panel Component',
  meta: [
    {
      name: 'description',
      content: 'Discover the Expandable Panel component in Corrosive Components. Enhance your Qwik projects with panels that expand and collapse to manage content visibility effectively.',
    },
    // Open graph
    {
      property: 'og:title',
      content: 'Corrosive Components - Expandable Panel Component',
    },
    {
      property: 'og:description',
      content: 'Learn how to use the Expandable Panel component from Corrosive Components. Create dynamic panels that expand or collapse to organize content in your Qwik applications.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: `${import.meta.env.PUBLIC_URL}/docs/display/expandable/`,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Corrosive Components - Expandable Panel Component',
    },
    {
      name: 'twitter:description',
      content: 'Implement the Expandable Panel component from Corrosive Components to create interactive panels that manage content visibility in your Qwik projects.',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: `${import.meta.env.PUBLIC_URL}/docs/display/expandable/`,
    },
  ],
};
