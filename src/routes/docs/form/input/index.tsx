import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { Button } from '../../../../../../corrosive-components'
import { CodeBlock } from '~/components/site-components/code-block'
import { Input } from '~/components/input'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  const state = useSignal('');

  const handleChange = $((value) => {
    state.value = value;
  });

  return (
    <div>
      <Input
        value={state.value}
        class="my-input"
        style={{ margin: "10px" }}
        variant="outlined"
        color="primary"
        rounded
        raised
        placeholder="Enter text"
        onChange={handleChange}
        type="text"
      >
        <Button q:slot={"left"}>left</Button>
        <Button q:slot={"right"}>right</Button>
      </Input>
      <p>Input value: {state.value}</p>
    </div>
  );
});`

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Input</h1>
        <div q:slot={'e'}>
          <div class={'m-3 grid grid-cols-3 gap-1'}>
            <Input variant={'text'} value={'text'}></Input>
            <Input variant={'outlined'} value={'outlined'}></Input>
            <Input variant={'solid'} value={'solid'}></Input>
          </div>
          <div class={'m-3 grid grid-cols-3 gap-1 md:grid-cols-6'}>
            <Input placeholder={'primary'} value={'primary'} />
            <Input
              color={'success'}
              placeholder={'success'}
              value={'success'}
            />
            <Input color={'error'} placeholder={'error'} value={'error'} />
            <Input
              color={'warning'}
              placeholder={'warning'}
              value={'warning'}
            />
            <Input color={'accent'} placeholder={'accent'} value={'accent'} />
            <Input
              disabled={true}
              placeholder={'disabled'}
              value={'disabled'}
            />
          </div>
          <div class={'m-3 grid grid-cols-3 gap-1'}>
            <Input rounded={true} value={'rounded'} />
            <Input raised={true} value={'raised'} />
            <Input type={'number'} placeholder={'numbers only'} value={555} />
          </div>
          <Input class={'m-3'}>
            <Button q:slot={'left'}>{'q:slot={"left"}'}</Button>
            <Button q:slot={'right'}>{'q:slot={"right"}'}</Button>
          </Input>
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
              <th>Property</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>value</td>
              <td>number | string</td>
              <td>Initial value of the input field.</td>
            </tr>
            <tr>
              <td>class</td>
              <td>string</td>
              <td>Custom class names to apply to the input container.</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boolean</td>
              <td>If true, disables the input field.</td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>Inline styles to apply to the input container.</td>
            </tr>
            <tr>
              <td>color</td>
              <td>"success" | "error" | "warning" | "accent" | "primary"</td>
              <td>
                Defines the color of the input field. Defaults to "primary".
              </td>
            </tr>
            <tr>
              <td>variant</td>
              <td>"solid" | "outlined" | "text"</td>
              <td>Defines the input style variant. Defaults to "outlined".</td>
            </tr>
            <tr>
              <td>rounded</td>
              <td>boolean</td>
              <td>If true, applies rounded corners to the input field.</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>{'QRL<(value: number | string | undefined) => void>'}</td>
              <td>Event handler for when the input value changes.</td>
            </tr>
            <tr>
              <td>raised</td>
              <td>boolean</td>
              <td>If true, applies a raised style to the input field.</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>string</td>
              <td>Placeholder text for the input field.</td>
            </tr>
            <tr>
              <td>floatingPlaceholder</td>
              <td>boolean</td>
              <td>
                If true, displays a floating placeholder. Defaults to true.
              </td>
            </tr>
            <tr>
              <td>type</td>
              <td>
                "text" | "number" | "password" | "color" | "date" |
                HTMLInputTypeAttribute
              </td>
              <td>Defines the input type. Defaults to "text".</td>
            </tr>
            <tr>
              <td>min</td>
              <td>number</td>
              <td>
                Minimum value for the input field if the type is "number".
                Defaults to Number.MIN_VALUE.
              </td>
            </tr>
            <tr>
              <td>max</td>
              <td>number</td>
              <td>
                Maximum value for the input field if the type is "number".
                Defaults to Number.MAX_VALUE.
              </td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/from/input/`
const name:string = 'Input'

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