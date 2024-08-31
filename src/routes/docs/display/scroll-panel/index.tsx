import { $, component$, useStore } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { ToggleButtonGroup } from '~/components/toggle-button-group'
import { ScrollPanel,type ScrollPanelProps } from '~/components/scroll-panel'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  return (
    <div>
      <ScrollPanel color="accent" direction="both">
        <div style={{ width: '200%', height: '200%', padding: '10px' }}>
          <p>Content goes here...</p>
          <p>More content...</p>
          <p>Even more content...</p>
        </div>
      </ScrollPanel>
    </div>
  )
})`

export default component$(() => {
  const props = useStore<ScrollPanelProps>({
    color: 'primary',
    direction: 'both',
  })

  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Scroll Panel</h1>
        <div
          class={'flex w-full flex-col items-center justify-center gap-2 p-2'}
          q:slot={'e'}
        >
          <ScrollPanel class={'m-5 h-40 w-full'} {...props}>
            <p style={{ width: '1500px' }} class={'overflow-clip'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </ScrollPanel>
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
                color: 'primary',
                onChange: $(() => {
                  props.direction = 'both'
                }),
              },
              {
                id: 1,
                value: false,
                color: 'success',
                onChange: $(() => {
                  props.direction = 'horizontal'
                }),
              },
              {
                id: 2,
                value: false,
                color: 'error',
                onChange: $(() => {
                  props.direction = 'vertical'
                }),
              },
            ]}
          >
            <p q:slot={'0'} class={'p-2'}>
              both
            </p>
            <p q:slot={'1'} class={'p-2'}>
              horizontal
            </p>
            <p q:slot={'2'} class={'p-2'}>
              vertical
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
                Custom CSS class for the scroll panel container. (default:
                `undefined`)
              </td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>
                Inline styles for the scroll panel container. (default:
                `undefined`)
              </td>
            </tr>
            <tr>
              <td>color</td>
              <td>'success' | 'error' | 'warning' | 'accent' | 'primary'</td>
              <td>Color theme for the scrollbars. (default: `primary`)</td>
            </tr>
            <tr>
              <td>direction</td>
              <td>'vertical' | 'horizontal' | 'both'</td>
              <td>
                Scroll direction allowed. Can be vertical, horizontal, or both.
                (default: `both`)
              </td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/display/scroll-panel/`
const name:string = 'Scroll Panel'

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