import { $, component$, useStore } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { ToggleButtonGroup } from '~/components/toggle-button-group'
import { Avatar } from '~/components/avatar'
import { Badge,type BadgeProps } from '~/components/badge'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  return (
    <Avatar fallback={'BG'}>
      <Badge
        class="custom-badge"
        size={12}
        sizeType="px"
        position="top-right"
        shape="circle"
        variant="solid"
        color="error"
      >
        +5
      </Badge>
    </Avatar>
  );
});`

export default component$(() => {
  const props = useStore<BadgeProps>({
    position: 'top-right',
    variant: 'solid',
    color: 'primary',
  })

  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Badge</h1>
        <div
          class={'flex flex-col items-center justify-center gap-2 p-2'}
          q:slot={'e'}
        >
          <Avatar class={'relative m-10'} fallback={'BG'}>
            <Badge {...props}>+5</Badge>
          </Avatar>
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
                  props.position = 'top-right'
                }),
              },
              {
                id: 1,
                value: false,
                onChange: $(() => {
                  props.position = 'top-left'
                }),
              },
              {
                id: 2,
                value: false,
                onChange: $(() => {
                  props.position = 'bottom-right'
                }),
              },
              {
                id: 3,
                value: false,
                onChange: $(() => {
                  props.position = 'bottom-left'
                }),
              },
            ]}
          >
            <p q:slot={'0'} class={'p-2'}>
              top right
            </p>
            <p q:slot={'1'} class={'p-2'}>
              top left
            </p>
            <p q:slot={'2'} class={'p-2'}>
              bottom right
            </p>
            <p q:slot={'3'} class={'p-2'}>
              bottom left
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
                <code>class</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                Additional custom class names to apply to the badge component.
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
                Inline styles to apply to the badge container. Defaults to{' '}
                <code>{'{ height: 0, width: 0 }'}</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>size</code>
              </td>
              <td>
                <code>number</code>
              </td>
              <td>
                The size of the badge's font. Default is <code>15</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>sizeType</code>
              </td>
              <td>
                <code>'rem' | 'rm' | 'px' | string</code>
              </td>
              <td>
                Specifies the unit for the badge size. Default is{' '}
                <code>'px'</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>position</code>
              </td>
              <td>
                <code>
                  'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
                </code>
              </td>
              <td>
                Position of the badge relative to its container. Default is{' '}
                <code>'top-right'</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>shape</code>
              </td>
              <td>
                <code>'circle' | 'square' | number</code>
              </td>
              <td>
                The shape of the badge. Can be <code>'circle'</code>,{' '}
                <code>'square'</code>, or a numeric value representing a border
                radius percentage. Default is <code>'circle'</code>.
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
                The visual style of the badge. Default is <code>'solid'</code>.
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
                The color theme of the badge. Default is <code>'primary'</code>.
              </td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/feedback/badge/`
const name:string = 'Badge'

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