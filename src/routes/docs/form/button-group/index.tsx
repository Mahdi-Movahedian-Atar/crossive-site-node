import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { ButtonGroup } from '../../../../../../corrosive-components'
import { CodeBlock } from '~/components/site-components/code-block'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `const buttonMembers: ButtonMembers[] = [
  { id: 0, color: "success", disabled: false, onClick: $(() => alert("Button 1 clicked!")) },
  { id: 1, color: "error", disabled: false, onClick: $(() => alert("Button 2 clicked!")) },
  { id: 2, color: "warning", disabled: true, onClick: $(() => alert("Button 3 clicked!")) },
];

export const App = component$(() => {
  return (
    <ButtonGroup
      members={buttonMembers}
      class="my-button-group"
      style={{ margin: "10px" }}
      variant="outlined"
      color="primary"
      rounded
      raised
      vertical
    >
      <h1 q:slot={"0"}>Buttom</h1>
      <h1 q:slot={"1"}>Buttom</h1>
      <h1 q:slot={"2"}>Buttom</h1>
    </ButtonGroup>
  );
});
`

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Button Group</h1>
        <div q:slot={'e'}>
          <div
            class={'m-3 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'}
          >
            <ButtonGroup
              variant={'text'}
              color={'primary'}
              members={[{ id: 0 }, { id: 1, disabled: true }, { id: 2 }]}
            >
              <p q:slot={'0'} class={'p-2'}>
                primary
              </p>
              <p q:slot={'1'} class={'p-2'}>
                &
              </p>
              <p q:slot={'2'} class={'p-2'}>
                text
              </p>
            </ButtonGroup>
            <ButtonGroup
              variant={'outlined'}
              color={'error'}
              members={[{ id: 0 }, { id: 1, disabled: true }, { id: 2 }]}
            >
              <p q:slot={'0'} class={'p-2'}>
                error
              </p>
              <p q:slot={'1'} class={'p-2'}>
                &
              </p>
              <p q:slot={'2'} class={'p-2'}>
                outlined
              </p>
            </ButtonGroup>
            <ButtonGroup
              color={'success'}
              members={[{ id: 0 }, { id: 1, disabled: true }, { id: 2 }]}
            >
              <p q:slot={'0'} class={'p-2'}>
                success
              </p>
              <p q:slot={'1'} class={'p-2'}>
                &
              </p>
              <p q:slot={'2'} class={'p-2'}>
                solid
              </p>
            </ButtonGroup>
            <ButtonGroup
              color={'accent'}
              raised={true}
              members={[{ id: 0 }, { id: 1, disabled: true }, { id: 2 }]}
            >
              <p q:slot={'0'} class={'p-2'}>
                accent
              </p>
              <p q:slot={'1'} class={'p-2'}>
                &
              </p>
              <p q:slot={'2'} class={'p-2'}>
                raised
              </p>
            </ButtonGroup>
            <ButtonGroup
              color={'warning'}
              rounded={true}
              members={[{ id: 0 }, { id: 1, disabled: true }, { id: 2 }]}
            >
              <p q:slot={'0'} class={'p-2'}>
                warning
              </p>
              <p q:slot={'1'} class={'p-2'}>
                &
              </p>
              <p q:slot={'2'} class={'p-2'}>
                rounded
              </p>
            </ButtonGroup>
            <ButtonGroup
              members={[
                { id: 0 },
                { id: 1, color: 'success' },
                { id: 2, color: 'accent' },
              ]}
            >
              <p q:slot={'0'} class={'p-2'}>
                multi
              </p>
              <p q:slot={'1'} class={'p-2'}>
                colored
              </p>
              <p q:slot={'2'} class={'p-2'}>
                buttons
              </p>
            </ButtonGroup>
          </div>
        </div>

        <CodeBlock q:slot={'c'} code={code} language={'typescript'} />

        <div q:slot={'p'}>
          <h1 class={'flex place-content-center p-6 text-4xl font-bold'}>
            ButtonMembers
          </h1>
          <table class={'border-b-width border-b-primary-0'}>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>id</td>
                <td>number</td>
                <td>Unique identifier for the button.</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>If true, disables the button.</td>
              </tr>
              <tr>
                <td>color</td>
                <td>"success" | "error" | "warning" | "accent" | "primary"</td>
                <td>Defines the button color.</td>
              </tr>
              <tr>
                <td>onClick</td>
                <td>{'QRL<() => void>'}</td>
                <td>The click event handler for the button.</td>
              </tr>
            </tbody>
          </table>
          <h1
            class={
              'flex place-content-center border-t-width border-t-primary-0 p-6 text-4xl font-bold'
            }
          >
            Props
          </h1>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>members</td>
                <td>ButtonMembers[]</td>
                <td>List of button members in the group.</td>
              </tr>
              <tr>
                <td>class</td>
                <td>string</td>
                <td>
                  Custom class names to apply to the button group container.
                </td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>If true, disables all buttons in the group.</td>
              </tr>
              <tr>
                <td>style</td>
                <td>CSSProperties</td>
                <td>Inline styles to apply to the button group container.</td>
              </tr>
              <tr>
                <td>variant</td>
                <td>"solid" | "outlined" | "text"</td>
                <td>Defines the button style variant. Defaults to "solid".</td>
              </tr>
              <tr>
                <td>color</td>
                <td>"success" | "error" | "warning" | "accent" | "primary"</td>
                <td>
                  Defines the default button color. Defaults to "primary".
                </td>
              </tr>
              <tr>
                <td>rounded</td>
                <td>boolean</td>
                <td>If true, applies rounded corners to the buttons.</td>
              </tr>
              <tr>
                <td>raised</td>
                <td>boolean</td>
                <td>If true, applies a raised style to the buttons.</td>
              </tr>
              <tr>
                <td>vertical</td>
                <td>boolean</td>
                <td>
                  If true, displays the buttons vertically instead of
                  horizontally.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/from/button-group/`
const name:string = 'Button Group'

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