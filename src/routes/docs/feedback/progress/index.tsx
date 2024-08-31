import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { Progress } from '~/components/progress'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  return (
    <Progress
      size={100}
      width={10}
      progress={0}
      type="circular"
      variant="infinite"
      color="success"
    />
  );
});`

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Progress</h1>
        <div q:slot={'e'}>
          <div
            class={'grid w-full content-center justify-items-center gap-4 p-5'}
          >
            <Progress progress={0} />
            <Progress progress={0} color={'success'} />
            <Progress progress={62} variant={'value'} color={'error'} />
            <Progress progress={81} variant={'withLabel'} color={'accent'} />
            <Progress
              class={'col-span-2 w-full md:col-span-4'}
              type={'linear'}
              variant={'value'}
              progress={32}
            />
            <Progress
              class={'col-span-2 w-full md:col-span-4'}
              type={'linear'}
              variant={'withLabel'}
              progress={62}
              color={'success'}
            />
            <Progress
              class={'col-span-2 w-full md:col-span-4'}
              type={'linear'}
              progress={62}
              color={'error'}
            />
            <Progress
              class={'col-span-2 w-full md:col-span-4'}
              type={'linear'}
              progress={62}
              color={'warning'}
            />
            <Progress
              class={'col-span-2 w-full md:col-span-4'}
              type={'linear'}
              progress={62}
              color={'accent'}
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
                <code>size</code>
              </td>
              <td>
                <code>number</code>
              </td>
              <td>
                Size of the circular progress bar. Only applicable when{' '}
                <code>type</code> is <code>circular</code>. Default is{' '}
                <code>100</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>width</code>
              </td>
              <td>
                <code>number</code>
              </td>
              <td>
                Thickness of the progress line for both circular and linear
                types. Default is <code>10</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>progress</code>
              </td>
              <td>
                <code>number</code>
              </td>
              <td>Current progress value (0-100). This prop is required.</td>
            </tr>
            <tr>
              <td>
                <code>class</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>
                Additional CSS classes for the component. Default is{' '}
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
                Inline styles for the component. Default is{' '}
                <code>
                  {"{ display: 'inline-flex', alignContent: 'center' }"}
                </code>
                .
              </td>
            </tr>
            <tr>
              <td>
                <code>type</code>
              </td>
              <td>
                <code>'circular' | 'linear'</code>
              </td>
              <td>
                Type of the progress bar, either circular or linear. Default is{' '}
                <code>'circular'</code>.
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
                Color of the progress bar. Default is <code>'primary'</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>variant</code>
              </td>
              <td>
                <code>'infinite' | 'value' | 'withLabel'</code>
              </td>
              <td>
                Variant of the progress bar:
                <ul>
                  <li>
                    <code>'infinite'</code>: Loops infinitely.
                  </li>
                  <li>
                    <code>'value'</code>: Displays the progress value without a
                    label.
                  </li>
                  <li>
                    <code>'withLabel'</code>: Displays the progress value with a
                    label.
                  </li>
                </ul>
                Default is <code>'infinite'</code>.
              </td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/feedback/progress/`
const name:string = 'Progress'

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