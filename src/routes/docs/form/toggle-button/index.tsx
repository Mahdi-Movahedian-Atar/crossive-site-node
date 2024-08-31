import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { ToggleButton } from '~/components/toggle-button'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  const state = useSignal(false);

  const handleChange = $((value) => {
    state.value = value;
  });

  return (
    <div>
      <ToggleButton
        class="my-toggle-button"
        style={{ margin: '10px', padding: '5px' }}
        color="accent"
        rounded={true}
        raised={true}
        onChange={handleChange}
        value={state.value}
      >
        {state.value ? 'On' : 'Off'}
      </ToggleButton>
      <p>Toggle is {state.value ? 'On' : 'Off'}</p>
    </div>
  );
});`

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Toggle Button</h1>
        <div q:slot={'e'}>
          <div class={'m-3 grid grid-cols-3 gap-1 md:grid-cols-6'}>
            <ToggleButton color={'primary'}>
              <p class={'p-2'}>primary</p>
            </ToggleButton>
            <ToggleButton color={'accent'}>
              <p class={'p-2'}>accent</p>
            </ToggleButton>
            <ToggleButton color={'success'}>
              <p class={'p-2'}>success</p>
            </ToggleButton>
            <ToggleButton color={'error'}>
              <p class={'p-2'}>error</p>
            </ToggleButton>
            <ToggleButton color={'warning'}>
              <p class={'p-2'}>warning</p>
            </ToggleButton>
            <ToggleButton disabled={true}>
              <p class={'p-2'}>disabled</p>
            </ToggleButton>
          </div>
          <div class={'m-3 grid grid-cols-2 gap-1'}>
            <ToggleButton rounded={true}>
              <p class={'p-2'}>rounded</p>
            </ToggleButton>
            <ToggleButton raised={true}>
              <p class={'p-2'}>raised</p>
            </ToggleButton>
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
              <td>value</td>
              <td>boolean</td>
              <td>
                The initial state of the toggle button. Defaults to{' '}
                <code>false</code>.
              </td>
            </tr>
            <tr>
              <td>class</td>
              <td>string</td>
              <td>
                Custom class names to apply to the toggle button container.
              </td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boolean</td>
              <td>If true, disables the toggle button.</td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>Inline styles to apply to the toggle button container.</td>
            </tr>
            <tr>
              <td>color</td>
              <td>"success" | "error" | "warning" | "accent" | "primary"</td>
              <td>
                Defines the color of the toggle button. Defaults to{' '}
                <code>"primary"</code>.
              </td>
            </tr>
            <tr>
              <td>rounded</td>
              <td>boolean</td>
              <td>If true, applies rounded corners to the toggle button.</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>{'QRL(value: boolean) => void'}</td>
              <td>
                Event handler triggered when the toggle button value changes.
              </td>
            </tr>
            <tr>
              <td>raised</td>
              <td>boolean</td>
              <td>If true, applies a raised style to the button.</td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/from/toggle-button/`
const name:string = 'Toggle Button'

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