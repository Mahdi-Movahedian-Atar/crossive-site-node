import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { Divider } from '../../../../../../corrosive-components'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  return (
    <Divider
      offset={30}
      vertical={false}
      variant={'text'}
      color={'accent'}
    >
      <p q:slot={'firstPanel'}>first Panel</p>
      <p q:slot={'secondPanel'}>second Panel</p>
    </Divider>
  )
})`

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Divider</h1>
        <div q:slot={'e'}>
          <Divider variant={'text'} class={'h-64'}>
            <Divider
              q:slot={'firstPanel'}
              class={'h-full w-full'}
              offset={70}
              vertical={true}
              variant={'text'}
              color={'success'}
            >
              <Divider
                q:slot={'firstPanel'}
                class={'h-full w-full'}
                offset={60}
                vertical={false}
                variant={'solid'}
                color={'warning'}
              >
                <p
                  q:slot={'firstPanel'}
                  class={
                    'h-full w-full content-center overflow-hidden text-center'
                  }
                >
                  {"q:slot={'firstPanel'}"}
                </p>
                <p
                  q:slot={'secondPanel'}
                  class={
                    'h-full w-full content-center overflow-hidden text-center'
                  }
                >
                  {"q:slot={'secondPanel'}"}
                </p>
              </Divider>
              <p
                q:slot={'secondPanel'}
                class={
                  'h-full w-full content-center overflow-hidden text-center'
                }
              >
                {"q:slot={'secondPanel'}"}
              </p>
            </Divider>
            <Divider
              q:slot={'secondPanel'}
              class={'h-full w-full'}
              vertical={true}
              variant={'text'}
              color={'error'}
            >
              <p
                q:slot={'firstPanel'}
                class={
                  'h-full w-full content-center overflow-hidden text-center'
                }
              >
                {"q:slot={'firstPanel'}"}
              </p>
              <Divider
                q:slot={'secondPanel'}
                class={'h-full w-full'}
                offset={30}
                vertical={false}
                variant={'text'}
                color={'accent'}
              >
                <p
                  q:slot={'firstPanel'}
                  class={
                    'h-full w-full content-center overflow-hidden text-center'
                  }
                >
                  {"q:slot={'firstPanel'}"}
                </p>
                <p
                  q:slot={'secondPanel'}
                  class={
                    'h-full w-full content-center overflow-hidden text-center'
                  }
                >
                  {"q:slot={'secondPanel'}"}
                </p>
              </Divider>
            </Divider>
          </Divider>
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
              <td>vertical</td>
              <td>boolean</td>
              <td>Determines if the divider is vertical. (default: `false`)</td>
            </tr>
            <tr>
              <td>offset</td>
              <td>number</td>
              <td>
                Percentage offset for the first panel size. (default: `50`)
              </td>
            </tr>
            <tr>
              <td>class</td>
              <td>string</td>
              <td>
                Custom CSS class for the component. (default: `undefined`)
              </td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>Inline styles for the component. (default: `undefined`)</td>
            </tr>
            <tr>
              <td>color</td>
              <td>'success' | 'error' | 'warning' | 'accent' | 'primary'</td>
              <td>Color variant for the divider. (default: `'primary'`)</td>
            </tr>
            <tr>
              <td>variant</td>
              <td>'solid' | 'outlined' | 'text'</td>
              <td>Style variant for the divider. (default: `'outlined'`)</td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: 'Corrosive Components - Divider Component',
  meta: [
    {
      name: 'description',
      content: 'Explore the Divider component in Corrosive Components. Learn how to add visual separation between content sections in your Qwik projects using customizable dividers with various styles and options.',
    },
    // Open graph
    {
      property: 'og:title',
      content: 'Corrosive Components - Divider Component',
    },
    {
      property: 'og:description',
      content: 'Discover how to use the Divider component in Corrosive Components. Add visual separation between sections with customizable dividers, enhancing the layout of your Qwik projects.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: `${import.meta.env.PUBLIC_URL}/docs/display/divider/`,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Corrosive Components - Divider Component',
    },
    {
      name: 'twitter:description',
      content: 'Learn how to implement the Divider component from Corrosive Components. Perfect for adding visual separation between content sections in your Qwik projects with customizable styles.',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: `${import.meta.env.PUBLIC_URL}/docs/display/divider/`,
    },
  ],
};
