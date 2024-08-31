import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { Button } from '../../../../../../corrosive-components'
import { CodeBlock } from '~/components/site-components/code-block'
import { TextArea } from '~/components/text-area'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  const state = useSignal('');

  const handleChange = $((value) => {
    state.value = value;
  });

  return (
    <div>
      <TextArea
        class="my-textarea"
        style={{ margin: "10px" }}
        variant="outlined"
        color="primary"
        rounded
        raised
        placeholder="Enter your text"
        onChange={handleChange}
        maxLength={200}
        cols={30}
        rows={5}
      >
        <Button q:slot={"left"}>left</Button>
        <Button q:slot={"right"}>right</Button>
      </TextArea>
      <p>Input value: {state.value}</p>
    </div>
  );
});`

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Text Area</h1>
        <div q:slot={'e'} class={'grid grid-cols-1 justify-items-center'}>
          <div class={'m-3 grid w-full grid-cols-3 gap-1'}>
            <TextArea class={'h-fit'} variant={'text'} value={'text'} />
            <TextArea class={'h-fit'} variant={'outlined'} value={'outlined'} />
            <TextArea class={'h-fit'} variant={'solid'} value={'solid'} />
          </div>
          <div class={'m-3 grid w-full grid-cols-3 gap-1 md:grid-cols-6'}>
            <TextArea
              class={'h-fit'}
              placeholder={'primary'}
              value={'primary'}
            />
            <TextArea
              class={'h-fit'}
              color={'success'}
              placeholder={'success'}
              value={'success'}
            />
            <TextArea
              class={'h-fit'}
              color={'error'}
              placeholder={'error'}
              value={'error'}
            />
            <TextArea
              class={'h-fit'}
              color={'warning'}
              placeholder={'warning'}
              value={'warning'}
            />
            <TextArea
              class={'h-fit'}
              color={'accent'}
              placeholder={'accent'}
              value={'accent'}
            />
            <TextArea
              class={'h-fit'}
              disabled={true}
              placeholder={'disabled'}
              value={'disabled'}
            />
          </div>
          <div class={'m-3 grid w-full grid-cols-2 gap-1'}>
            <TextArea class={'h-fit'} rounded={true} value={'rounded'} />
            <TextArea class={'h-fit'} raised={true} value={'raised'} />
          </div>
          <TextArea class={'m-3 h-fit w-fit max-w-full'}>
            <Button q:slot={'left'}>{'q:slot={"left"}'}</Button>
            <Button q:slot={'right'}>{'q:slot={"right"}'}</Button>
          </TextArea>
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
              <td>string</td>
              <td>Default value of the textarea.</td>
            </tr>
            <tr>
              <td>class</td>
              <td>string</td>
              <td>Custom class names to apply to the textarea container.</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boolean</td>
              <td>If true, disables the textarea.</td>
            </tr>
            <tr>
              <td>cols</td>
              <td>number</td>
              <td>
                Specifies the visible width of the textarea. Defaults to 20.
              </td>
            </tr>
            <tr>
              <td>rows</td>
              <td>number</td>
              <td>
                Specifies the visible number of lines in the textarea. Defaults
                to 2.
              </td>
            </tr>
            <tr>
              <td>resize</td>
              <td>"horizontal" | "vertical" | "both" | "none"</td>
              <td>
                Defines the resizing behavior of the textarea. Defaults to
                "both".
              </td>
            </tr>
            <tr>
              <td>maxLength</td>
              <td>number</td>
              <td>
                Specifies the maximum number of characters allowed in the
                textarea.
              </td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>Inline styles to apply to the textarea container.</td>
            </tr>
            <tr>
              <td>color</td>
              <td>"success" | "error" | "warning" | "accent" | "primary"</td>
              <td>Defines the color of the textarea. Defaults to "primary".</td>
            </tr>
            <tr>
              <td>variant</td>
              <td>"solid" | "outlined" | "text"</td>
              <td>
                Defines the textarea style variant. Defaults to "outlined".
              </td>
            </tr>
            <tr>
              <td>rounded</td>
              <td>boolean</td>
              <td>If true, applies rounded corners to the textarea.</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>{'QRL<(value: string | undefined) => void>'}</td>
              <td>Event handler for when the textarea value changes.</td>
            </tr>
            <tr>
              <td>raised</td>
              <td>boolean</td>
              <td>If true, applies a raised style to the textarea.</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>string</td>
              <td>Placeholder text for the textarea.</td>
            </tr>
            <tr>
              <td>floatingPlaceholder</td>
              <td>boolean</td>
              <td>
                If true, displays a floating placeholder. Defaults to true.
              </td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/from/text-area/`
const name:string = 'Text Area'

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