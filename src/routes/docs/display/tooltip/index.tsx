import { $, component$, useStore } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { Button } from '~/components/button'
import { ToggleButtonGroup } from '~/components/toggle-button-group'
import { Tooltip,type TooltipProps } from '~/components/tooltip'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  return (
    <div>
      <Tooltip position="right" color="accent" variant="solid" delay={300}>
        <button>
          Hover me
          <div q:slot="content">This is a tooltip</div>
        </button>
      </Tooltip>
    </div>
  )
})`

export default component$(() => {
  const props = useStore<TooltipProps>({
    isActive: false,
    position: 'bottom',
    variant: 'solid',
    color: 'primary',
  })

  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Tooltip</h1>
        <div
          class={'flex flex-col items-center justify-center gap-2 p-2'}
          q:slot={'e'}
        >
          <Tooltip {...props} class={'m-32'}>
            <span class={'text-2xl'}>Hover Over Me</span>
            <div q:slot={'content'}>
              <h5>I am a tooltip</h5>
            </div>
          </Tooltip>
          <Button onClick={$(() => (props.isActive = !props.isActive))}>
            <p class={'p-2'}>{props.isActive ? 'Hide' : 'Show'}</p>
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
                  props.position = 'bottom'
                }),
              },
              {
                id: 1,
                value: false,
                onChange: $(() => {
                  props.position = 'left'
                }),
              },
              {
                id: 2,
                value: false,
                onChange: $(() => {
                  props.position = 'right'
                }),
              },
              {
                id: 3,
                value: false,
                onChange: $(() => {
                  props.position = 'top'
                }),
              },
            ]}
          >
            <p q:slot={'0'} class={'p-2'}>
              bottom
            </p>
            <p q:slot={'1'} class={'p-2'}>
              left
            </p>
            <p q:slot={'2'} class={'p-2'}>
              right
            </p>
            <p q:slot={'3'} class={'p-2'}>
              top
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
              <td>
                <code>isActive</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                Controls whether the tooltip is always visible. Default is{' '}
                <code>false</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>disabled</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                Disables the tooltip when set to <code>true</code>. Default is{' '}
                <code>false</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>position</code>
              </td>
              <td>
                <code>'top' | 'right' | 'bottom' | 'left'</code>
              </td>
              <td>
                Sets the position of the tooltip relative to the parent element.
                Default is <code>'top'</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>delay</code>
              </td>
              <td>
                <code>number</code>
              </td>
              <td>
                Delay in milliseconds before the tooltip appears or disappears.
                Default is <code>0</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>class</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                Custom CSS classes applied to the tooltip container. Default is{' '}
                <code>undefined</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>style</code>
              </td>
              <td>
                <code>CSSProperties</code>
              </td>
              <td>
                Inline styles applied to the tooltip container. Default is{' '}
                <code>
                  {
                    "{position: 'relative', height: 'fit-content', width: 'fit-content' }"
                  }
                </code>
                .
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
                Color theme for the tooltip. Default is <code>'primary'</code>.
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
                Visual variant of the tooltip. Default is{' '}
                <code>'outlined'</code>.
              </td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/display/tooltip/`
const name:string = 'Tooltip'

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