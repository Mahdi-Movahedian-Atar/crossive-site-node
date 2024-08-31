import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { Button } from '../../../../../../corrosive-components'
import { CodeBlock } from '~/components/site-components/code-block'
import { Select } from '~/components/select'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  const state = useSignal(undefined);

  const handleChange = $((value) => {
    state.value = value;
  });

  return (
    <div>
      <Select
        values={[
          { option: "Option 1", group: false },
          { option: "Option 2", group: false },
          { option: "Group 1", group: true },
          { option: "Option 3", group: false },
        ]}
        class="my-select"
        style={{ margin: "10px" }}
        variant="outlined"
        color="primary"
        rounded
        raised
        placeholder="Select an option"
        onChange={handleChange}
        maxHeight={150}
        direction="down"
      >
        <Button q:slot={"left"}>left</Button>
        <Button q:slot={"right"}>right</Button>
      </Select>
      <p>Selected Value: {state.value}</p>
    </div>
  );
});`

export default component$(() => {
  const values = [
    { option: 'first', group: true },
    { option: 'first', group: false },
    { option: 'second', group: false },
    { option: 'third', group: false },
    { option: 'second', group: true },
    { option: 'first', group: false },
    { option: 'second', group: false },
    { option: 'third', group: false },
    { option: 'third', group: true },
    { option: 'first', group: false },
    { option: 'second', group: false },
    { option: 'third', group: false },
  ]

  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Select</h1>
        <div q:slot={'e'}>
          <div class={'m-4 grid grid-cols-3 gap-1'}>
            <Select
              values={values}
              maxHeight={200}
              variant={'text'}
              placeholder={'text'}
            />
            <Select
              values={values}
              maxHeight={200}
              variant={'outlined'}
              placeholder={'outlined'}
            />
            <Select
              values={values}
              maxHeight={200}
              variant={'solid'}
              placeholder={'solid'}
            />
          </div>
          <div class={'m-4 grid grid-cols-3 gap-1 md:grid-cols-6'}>
            <Select values={values} maxHeight={200} placeholder={'primary'} />
            <Select
              values={values}
              maxHeight={200}
              color={'success'}
              placeholder={'success'}
            />
            <Select
              values={values}
              maxHeight={200}
              color={'error'}
              placeholder={'error'}
            />
            <Select
              values={values}
              maxHeight={200}
              color={'warning'}
              placeholder={'warning'}
            />
            <Select
              values={values}
              maxHeight={200}
              color={'accent'}
              placeholder={'accent'}
            />
            <Select
              values={values}
              maxHeight={200}
              disabled={true}
              placeholder={'disabled'}
            />
          </div>
          <div class={'m-4 grid grid-cols-2 gap-1'}>
            <Select
              values={values}
              maxHeight={200}
              rounded={true}
              placeholder={'rounded'}
            />
            <Select
              values={values}
              maxHeight={200}
              raised={true}
              placeholder={'raised'}
            />
          </div>
          <div class={'m-4 grid grid-cols-4 gap-1'}>
            <Select
              values={values}
              maxHeight={200}
              direction={'right'}
              placeholder={'right'}
            />
            <Select
              values={values}
              maxHeight={200}
              direction={'up'}
              placeholder={'up'}
            />
            <Select
              values={values}
              maxHeight={200}
              direction={'down'}
              placeholder={'down'}
            />
            <Select
              values={values}
              maxHeight={200}
              direction={'left'}
              placeholder={'left'}
            />
          </div>
          <Select values={values} maxHeight={200} class={'m-4'}>
            <Button q:slot={'left'}>{'q:slot={"left"}'}</Button>
            <Button q:slot={'right'}>{'q:slot={"right"}'}</Button>
          </Select>
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
              <td>values</td>
              <td>{'{option: string; group: boolean}[]'}</td>
              <td>
                List of selectable options, where each option can be grouped.
              </td>
            </tr>
            <tr>
              <td>value</td>
              <td>string</td>
              <td>Default selected value of the select input.</td>
            </tr>
            <tr>
              <td>class</td>
              <td>string</td>
              <td>Custom class names to apply to the select container.</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boolean</td>
              <td>If true, disables the select input.</td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>Inline styles to apply to the select container.</td>
            </tr>
            <tr>
              <td>color</td>
              <td>"success" | "error" | "warning" | "accent" | "primary"</td>
              <td>
                Defines the color of the select input. Defaults to "primary".
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
              <td>If true, applies rounded corners to the select input.</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>{'QRL<(value: string) => void>'}</td>
              <td>Event handler for when the select input value changes.</td>
            </tr>
            <tr>
              <td>raised</td>
              <td>boolean</td>
              <td>If true, applies a raised style to the select input.</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>string</td>
              <td>Placeholder text for the select input.</td>
            </tr>
            <tr>
              <td>floatingPlaceholder</td>
              <td>boolean</td>
              <td>
                If true, displays a floating placeholder. Defaults to true.
              </td>
            </tr>
            <tr>
              <td>maxHeight</td>
              <td>number</td>
              <td>Maximum height of the dropdown menu. Defaults to 100.</td>
            </tr>
            <tr>
              <td>direction</td>
              <td>"down" | "up" | "left" | "right"</td>
              <td>
                Direction in which the dropdown menu will open. Defaults to
                "down".
              </td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/from/select/`
const name:string = 'Select'

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