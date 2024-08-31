import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { Slider } from '~/components/slider'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  const minSignal = useSignal(10);
  const maxSignal = useSignal(90);

  return (
    <div>
      <Slider
        min={0}
        max={100}
        defaultMin={10}
        defaultMax={90}
        color="accent"
        onChange$={(min, max) => {
          minSignal.value = min!;
          maxSignal.value = max!;
        }}
      />
      <p>Selected Range: {minSignal.value} - {maxSignal.value}</p>
    </div>
  );
});`

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Slider</h1>
        <div q:slot={'e'}>
          <div class={'grid h-52 grid-cols-6 gap-5 p-5'}>
            <div class={'col-span-5 grid grid-rows-5'}>
              <Slider defaultMin={75} type={'minRange'} />
              <Slider defaultMax={70} steps={10} color={'success'} />
              <Slider
                defaultMin={25}
                defaultMax={80}
                type={'dual'}
                color={'warning'}
              />
              <Slider defaultMin={0} defaultMax={60} color={'error'} />
              <Slider steps={5} type={'dual'} color={'accent'} />
            </div>
            <div class={'grid grid-cols-5'}>
              <Slider vertical={true} defaultMin={75} type={'minRange'} />
              <Slider
                vertical={true}
                defaultMax={70}
                steps={10}
                color={'success'}
              />
              <Slider
                vertical={true}
                defaultMin={25}
                defaultMax={80}
                type={'dual'}
                color={'warning'}
              />
              <Slider
                vertical={true}
                defaultMin={0}
                defaultMax={60}
                color={'error'}
              />
              <Slider
                vertical={true}
                steps={5}
                type={'dual'}
                color={'accent'}
              />
            </div>
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
              <td>disabled</td>
              <td>boolean</td>
              <td>
                Disables the slider when true. Default is <code>false</code>.
              </td>
            </tr>
            <tr>
              <td>vertical</td>
              <td>boolean</td>
              <td>
                Displays the slider vertically when true. Default is{' '}
                <code>false</code>.
              </td>
            </tr>
            <tr>
              <td>type</td>
              <td>'minRange' | 'maxRange' | 'dual'</td>
              <td>
                Defines the type of the slider: single-range, dual-range, etc.
                Default is <code>'maxRange'</code>.
              </td>
            </tr>
            <tr>
              <td>color</td>
              <td>'success' | 'error' | 'warning' | 'accent' | 'primary'</td>
              <td>
                Defines the color of the slider. Default is{' '}
                <code>'primary'</code>.
              </td>
            </tr>
            <tr>
              <td>floatingValues</td>
              <td>'unset' | 'set' | 'alwaysShow'</td>
              <td>
                Determines how the floating values are displayed. Default is{' '}
                <code>'set'</code>.
              </td>
            </tr>
            <tr>
              <td>steps</td>
              <td>number</td>
              <td>
                Defines the number of steps the slider has. Default is{' '}
                <code>1</code>.
              </td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>{'QRL(min ? : number, max ? : number) => void'}</td>
              <td>
                Callback function triggered when the slider value changes.
                Default is <code>undefined</code>.
              </td>
            </tr>
            <tr>
              <td>min</td>
              <td>number</td>
              <td>
                Minimum value of the slider. Default is <code>0</code>.
              </td>
            </tr>
            <tr>
              <td>max</td>
              <td>number</td>
              <td>
                Maximum value of the slider. Default is <code>100</code>.
              </td>
            </tr>
            <tr>
              <td>tolerance</td>
              <td>number</td>
              <td>
                Tolerance level for rounding slider values. Default is{' '}
                <code>1</code>.
              </td>
            </tr>
            <tr>
              <td>defaultMin</td>
              <td>number</td>
              <td>
                Default minimum value of the slider. Default is <code>0</code>.
              </td>
            </tr>
            <tr>
              <td>defaultMax</td>
              <td>number</td>
              <td>
                Default maximum value of the slider. Default is <code>100</code>
                .
              </td>
            </tr>
            <tr>
              <td>class</td>
              <td>string</td>
              <td>
                CSS class for custom styling. Default is <code>undefined</code>.
              </td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>
                Inline styles for custom styling. Default is{' '}
                <code>{"{height: '100%', width: '100%'}"}</code>.
              </td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/from/slider/`
const name:string = 'Slider'

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