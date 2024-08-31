import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { ResizablePanels } from '~/components/resizable-panels'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  const handleResize = $((offset) => {
    console.log('New offset:', offset);
  });
    
  return (
    <ResizablePanels
        vertical={true}
        min={20}
        max={80}
        defaultOffset={60}
        onChange={handleResize}
        collapsableLeft={10}
        collapsableRight={90}
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
        <h1 q:slot={'h'}>Resizable Panels</h1>
        <div q:slot={'e'}>
          <ResizablePanels class={'h-64'}>
            <ResizablePanels
              q:slot={'firstPanel'}
              class={'h-full w-full'}
              defaultOffset={70}
              vertical={true}
            >
              <ResizablePanels
                q:slot={'firstPanel'}
                class={'h-full w-full'}
                defaultOffset={60}
                vertical={false}
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
              </ResizablePanels>
              <p
                q:slot={'secondPanel'}
                class={
                  'h-full w-full content-center overflow-hidden text-center'
                }
              >
                {"q:slot={'secondPanel'}"}
              </p>
            </ResizablePanels>
            <ResizablePanels
              q:slot={'secondPanel'}
              class={'h-full w-full'}
              vertical={true}
            >
              <p
                q:slot={'firstPanel'}
                class={
                  'h-full w-full content-center overflow-hidden text-center'
                }
              >
                {"q:slot={'firstPanel'}"}
              </p>
              <ResizablePanels
                q:slot={'secondPanel'}
                class={'h-full w-full'}
                defaultOffset={30}
                vertical={false}
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
              </ResizablePanels>
            </ResizablePanels>
          </ResizablePanels>
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
              <td>disabled</td>
              <td>boolean</td>
              <td>
                Disables the resizing functionality when set to true. (default:
                `false`)
              </td>
            </tr>
            <tr>
              <td>vertical</td>
              <td>boolean</td>
              <td>
                Determines if the panels should be resizable vertically.
                (default: `false`)
              </td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>QRL&lt;(offset: number) =&gt; void&gt;</td>
              <td>
                Callback function that is called when the panels are resized.
                The offset value is passed as an argument.
              </td>
            </tr>
            <tr>
              <td>min</td>
              <td>number</td>
              <td>Minimum offset percentage for resizing. (default: `5`)</td>
            </tr>
            <tr>
              <td>max</td>
              <td>number</td>
              <td>Maximum offset percentage for resizing. (default: `95`)</td>
            </tr>
            <tr>
              <td>defaultOffset</td>
              <td>number</td>
              <td>Initial offset percentage for the panels. (default: `50`)</td>
            </tr>
            <tr>
              <td>collapsableLeft</td>
              <td>number</td>
              <td>
                Offset percentage at which the left panel collapses completely.
                (default: `0`)
              </td>
            </tr>
            <tr>
              <td>collapsableRight</td>
              <td>number</td>
              <td>
                Offset percentage at which the right panel collapses completely.
                (default: `100`)
              </td>
            </tr>
            <tr>
              <td>class</td>
              <td>string</td>
              <td>
                Custom CSS class for the resizable panels container. (default:
                `undefined`)
              </td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>
                {
                  'Inline styles for the resizable panels container. (default: `undefined`)'
                }
              </td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/display/resizable-panels/`
const name:string = 'Resizable Panels'

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