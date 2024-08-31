import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { Button } from '../../../../../../corrosive-components'
import { CodeBlock } from '~/components/site-components/code-block'
import type {DocumentHead} from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Button</h1>
        <div q:slot={'e'}>
          <div class={'m-3 grid grid-cols-3 gap-1'}>
            <Button variant={'text'}>
              <p class={'p-2'}>text</p>
            </Button>
            <Button class={'grow'} variant={'outlined'}>
              <p class={'p-2'}>outlined</p>
            </Button>
            <Button class={'grow'} variant={'solid'}>
              <p class={'p-2'}>solid</p>
            </Button>
          </div>
          <div class={'m-3 grid grid-cols-3 gap-1 md:grid-cols-6'}>
            <Button color={'primary'}>
              <p class={'p-2'}>primary</p>
            </Button>
            <Button color={'accent'}>
              <p class={'p-2'}>accent</p>
            </Button>
            <Button color={'success'}>
              <p class={'p-2'}>success</p>
            </Button>
            <Button color={'error'}>
              <p class={'p-2'}>error</p>
            </Button>
            <Button color={'warning'}>
              <p class={'p-2'}>warning</p>
            </Button>
            <Button disabled={true}>
              <p class={'p-2'}>disabled</p>
            </Button>
          </div>
          <div class={'m-3 grid grid-cols-2 gap-1'}>
            <Button rounded={true}>
              <p class={'p-2'}>rounded</p>
            </Button>
            <Button raised={true}>
              <p class={'p-2'}>raised</p>
            </Button>
          </div>
        </div>

        <CodeBlock
          q:slot={'c'}
          code={`export const App = component$(() => {
  const handleClick = $(() => {
    alert("Button clicked!");
  });

  return (
    <div>
      <Button
        class="my-custom-class"
        style={{ margin: "10px" }}
        variant="outlined"
        color="success"
        rounded
        onClick={handleClick}
        raised
      >
        <span>Click Me</span>
      </Button>
    </div>
  );
});`}
          language={'typescript'}
        />

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
                <code>class</code>
              </td>
              <td>
                <code>string</code>
              </td>
              <td>Custom class names to apply to the button container.</td>
            </tr>
            <tr>
              <td>
                <code>disabled</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                If <code>true</code>, disables the button.
              </td>
            </tr>
            <tr>
              <td>
                <code>style</code>
              </td>
              <td>
                <code>CSSProperties</code>
              </td>
              <td>Inline styles to apply to the button container.</td>
            </tr>
            <tr>
              <td>
                <code>variant</code>
              </td>
              <td>
                <code>"solid" | "outlined" | "text"</code>
              </td>
              <td>
                Defines the button style variant. Defaults to{' '}
                <code>"solid"</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>color</code>
              </td>
              <td>
                <code>
                  "success" | "error" | "warning" | "accent" | "primary"
                </code>
              </td>
              <td>
                Defines the button color. Defaults to <code>"primary"</code>.
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
                If <code>true</code>, applies rounded corners to the button.
              </td>
            </tr>
            <tr>
              <td>
                <code>onClick</code>
              </td>
              <td>
                <code>{'QRL<() => any>'}</code>
              </td>
              <td>The click event handler.</td>
            </tr>
            <tr>
              <td>
                <code>raised</code>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                If <code>true</code>, applies a raised style to the button.
              </td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/from/button/`
const name:string = 'Button'

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