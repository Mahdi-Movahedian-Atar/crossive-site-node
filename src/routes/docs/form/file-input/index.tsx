import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { Button } from '../../../../../../corrosive-components'
import { CodeBlock } from '~/components/site-components/code-block'
import { FileInput } from '~/components/file-input'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  const state = useSignal(undefined);

  const handleChange = $((value) => {
    state.value = value;
  });

  return (
    <div>
      <FileInput
        value={state.value}
        class="my-input"
        style={{ margin: "10px" }}
        variant="outlined"
        color="primary"
        rounded
        raised
        placeholder="Enter text"
        onChange={handleChange}
        multiple
        accept=".jpg,.png,.pdf"
      >
        <Button q:slot={"left"}>left</Button>
        <Button q:slot={"right"}>right</Button>
      </FileInput>
      <p>Selected files: {state.value.files ? state.value.files.length : 0}</p>
    </div>
  );
});`

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>File Input</h1>
        <div q:slot={'e'}>
          <div class={'m-4 grid grid-cols-3 gap-1'}>
            <FileInput variant={'text'} placeholder={'text'} />
            <FileInput variant={'outlined'} placeholder={'outlined'} />
            <FileInput variant={'solid'} placeholder={'solid'} />
          </div>
          <div class={'m-4 grid grid-cols-3 gap-1 md:grid-cols-6'}>
            <FileInput placeholder={'primary'} />
            <FileInput color={'success'} placeholder={'success'} />
            <FileInput color={'error'} placeholder={'error'} />
            <FileInput color={'warning'} placeholder={'warning'} />
            <FileInput color={'accent'} placeholder={'accent'} />
            <FileInput disabled={true} placeholder={'disabled'} />
          </div>
          <div class={'m-4 grid grid-cols-3 gap-1'}>
            <FileInput rounded={true} placeholder={'rounded'} />
            <FileInput raised={true} placeholder={'raised'} />
            <FileInput placeholder={'multiple'} multiple={true} />
          </div>
          <FileInput class={'m-4'}>
            <Button q:slot={'left'}>{'q:slot={"left"}'}</Button>
            <Button q:slot={'right'}>{'q:slot={"right"}'}</Button>
          </FileInput>
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
              <td>Custom class names to apply to the file input container.</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boolean</td>
              <td>If true, disables the file input field.</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td>boolean</td>
              <td>
                If true, allows multiple file selection. Defaults to false.
              </td>
            </tr>
            <tr>
              <td>accept</td>
              <td>string</td>
              <td>Comma-separated list of accepted file types.</td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>Inline styles to apply to the file input container.</td>
            </tr>
            <tr>
              <td>color</td>
              <td>"success" | "error" | "warning" | "accent" | "primary"</td>
              <td>
                Defines the color of the file input field. Defaults to
                "primary".
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
              <td>If true, applies rounded corners to the file input field.</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>{'QRL<(value: FileList | undefined) => void>'}</td>
              <td>Event handler for when the file input value changes.</td>
            </tr>
            <tr>
              <td>raised</td>
              <td>boolean</td>
              <td>If true, applies a raised style to the file input field.</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>string</td>
              <td>Placeholder text for the file input field.</td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/from/file-input/`
const name:string = 'File Input'

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