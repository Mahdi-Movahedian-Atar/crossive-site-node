import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { Skeleton } from '../../../../../../corrosive-components'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Skeleton />

      <Skeleton height="50px" width="200px" rounded />

      <Skeleton height="40px" width="100%" animation="pulse" color="error" />

      <Skeleton height="100px" width="300px" variant="outlined" />

      <Skeleton height="50px" width="50px" rounded={true} animation="wave" />
    </div>
  );
});`

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Skeleton</h1>
        <div q:slot={'e'}>
          <div
            class={'grid w-full content-center justify-items-center gap-4 p-5'}
          >
            <Skeleton width={'10rem'} height={'10rem'} rounded={true} />
            <Skeleton
              width={'10rem'}
              animation={'pulse'}
              height={'10rem'}
              rounded={true}
            />
            <Skeleton
              animation={'pulse'}
              class={'col-span-5'}
              width={'100%'}
              height={'1rem'}
              rounded={true}
              color={'success'}
            />
            <Skeleton
              class={'col-span-5'}
              width={'100%'}
              height={'1rem'}
              rounded={true}
              color={'error'}
            />
            <Skeleton
              animation={'pulse'}
              class={'col-span-5'}
              width={'100%'}
              height={'1rem'}
              rounded={true}
              color={'warning'}
            />
            <Skeleton
              class={'col-span-5'}
              width={'100%'}
              height={'1rem'}
              rounded={true}
              color={'accent'}
            />
            <Skeleton
              animation={'pulse'}
              class={'col-span-3'}
              width={'100%'}
              height={'6rem'}
              variant={'outlined'}
            />
            <Skeleton
              class={'col-span-2'}
              width={'100%'}
              height={'6rem'}
              variant={'outlined'}
            />
          </div>
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
                <code>height</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                Specifies the height of the skeleton. Default is{' '}
                <code>'100%'</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>width</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                Specifies the width of the skeleton. Default is{' '}
                <code>'100%'</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>animation</code>
              </td>
              <td>
                <code>'wave' | 'pulse' | 'none'</code>
              </td>
              <td>
                Type of animation applied to the skeleton:
                <ul>
                  <li>
                    <code>'wave'</code>: A wave-like animation.
                  </li>
                  <li>
                    <code>'pulse'</code>: A pulsing animation.
                  </li>
                  <li>
                    <code>'none'</code>: No animation.
                  </li>
                </ul>
                Default is <code>'wave'</code>.
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
                Color theme of the skeleton. Default is <code>'primary'</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>variant</code>
              </td>
              <td>
                <code>'solid' | 'outlined'</code>
              </td>
              <td>
                Style variant of the skeleton:
                <ul>
                  <li>
                    <code>'solid'</code>: Solid background.
                  </li>
                  <li>
                    <code>'outlined'</code>: Outlined background.
                  </li>
                </ul>
                Default is <code>'solid'</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>rounded</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                If <code>true</code>, applies rounded corners to the skeleton.
                Default is <code>false</code>.
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
                Additional CSS classes for custom styling. Default is{' '}
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
                Inline styles for the skeleton. Default is{' '}
                <code>
                  {
                    "{ display: 'inline-flex', height: '100%', width: '100%', alignContent: 'center' }"
                  }
                </code>
                .
              </td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/feedback/skeleton/`
const name:string = 'Skeleton'

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