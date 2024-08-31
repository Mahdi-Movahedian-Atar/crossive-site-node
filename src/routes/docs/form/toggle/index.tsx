import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { Toggle } from '~/components/toggle'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  const state = useSignal(false);

  const handleChange = $((value) => {
    state.value = value;
  });

  return (
    <div>
      <Toggle
        class="my-toggle"
        style={{ margin: "10px" }}
        variant="slider"
        color="primary"
        size={3}
        sizeType="rem"
        onChange={handleChange}
        value={state.value}
      />
      <p>Toggle is {state.value ? 'On' : 'Off'}</p>
    </div>
  );
});`

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Toggle</h1>
        <div
          q:slot={'e'}
          class={'m-3 grid grid-cols-6 justify-items-center gap-1'}
        >
          <Toggle />
          <Toggle color={'success'} />
          <Toggle color={'error'} />
          <Toggle color={'warning'} />
          <Toggle color={'accent'} />
          <Toggle disabled={true} />
          <Toggle variant={'radio'} />
          <Toggle variant={'radio'} color={'success'} />
          <Toggle variant={'radio'} color={'error'} />
          <Toggle variant={'radio'} color={'warning'} />
          <Toggle variant={'radio'} color={'accent'} />
          <Toggle variant={'radio'} disabled={true} />
          <Toggle variant={'checkbox'} />
          <Toggle variant={'checkbox'} color={'success'} />
          <Toggle variant={'checkbox'} color={'error'} />
          <Toggle variant={'checkbox'} color={'warning'} />
          <Toggle variant={'checkbox'} color={'accent'} />
          <Toggle variant={'checkbox'} disabled={true} />
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
              <td>Custom class names to apply to the toggle container.</td>
            </tr>
            <tr>
              <td>value</td>
              <td>boolean</td>
              <td>Default value of the toggle switch.</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boolean</td>
              <td>If true, disables the toggle switch.</td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>Inline styles to apply to the toggle container.</td>
            </tr>
            <tr>
              <td>variant</td>
              <td>"slider" | "radio" | "checkbox"</td>
              <td>Defines the toggle style variant. Defaults to "slider".</td>
            </tr>
            <tr>
              <td>color</td>
              <td>"success" | "error" | "warning" | "accent" | "primary"</td>
              <td>
                Defines the color of the toggle switch. Defaults to "primary".
              </td>
            </tr>
            <tr>
              <td>size</td>
              <td>number</td>
              <td>Size of the toggle switch. Defaults to 2.</td>
            </tr>
            <tr>
              <td>sizeType</td>
              <td>"rem" | "rm" | "px" | string</td>
              <td>Defines the unit of size measurement. Defaults to "rem".</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>{'QRL<(value: boolean) => void>'}</td>
              <td>Event handler for when the toggle value changes.</td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/from/toggle/`
const name:string = 'Toggle'

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