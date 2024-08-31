import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { ToggleButtonGroup } from '~/components/toggle-button-group'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
    const handleToggle = $((value: boolean) => {
    console.log('Button toggled:', value);
  });

  const members: ToggleButtonMembers[] = [
    { id: 0, value: false, color: 'primary', onChange: handleToggle },
    { id: 1, value: true, color: 'success', onChange: handleToggle },
    { id: 2, value: false, color: 'error', onChange: handleToggle },
  ];
    
  return (
    <ToggleButtonGroup
      members={members}
      class="my-button-group"
      style={{ margin: "10px" }}
      variant="outlined"
      color="primary"
      rounded
      raised
      vertical
    >
      <h1 q:slot={"0"}>Toggle</h1>
      <h1 q:slot={"1"}>Toggle</h1>
      <h1 q:slot={"2"}>Toggle</h1>
    </ToggleButtonGroup>
  );
});
`

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Toggle Button Group</h1>
        <div q:slot={'e'}>
          <div class={'m-3 grid grid-cols-1 gap-2 md:grid-cols-2'}>
            <ToggleButtonGroup
              color={'primary'}
              members={[
                { id: 0 },
                { id: 1, color: 'error' },
                { id: 2, color: 'success' },
              ]}
            >
              <p q:slot={'0'} class={'p-2'}>
                primary
              </p>
              <p q:slot={'1'} class={'p-2'}>
                error
              </p>
              <p q:slot={'2'} class={'p-2'}>
                success
              </p>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              members={[
                { id: 0, color: 'accent' },
                { id: 1, color: 'warning' },
                { id: 2, disabled: true },
              ]}
            >
              <p q:slot={'0'} class={'p-2'}>
                accent
              </p>
              <p q:slot={'1'} class={'p-2'}>
                warning
              </p>
              <p q:slot={'2'} class={'p-2'}>
                disabled
              </p>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              color={'accent'}
              raised={true}
              members={[
                { id: 0, value: true },
                { id: 1, disabled: true, value: true },
                { id: 2, value: true },
              ]}
            >
              <p q:slot={'0'} class={'p-2'}>
                Active
              </p>
              <p q:slot={'1'} class={'p-2'}>
                &
              </p>
              <p q:slot={'2'} class={'p-2'}>
                raised
              </p>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              rounded={true}
              exclusive={true}
              members={[
                { id: 0, value: true },
                { id: 1, disabled: true },
                { id: 2 },
              ]}
            >
              <p q:slot={'0'} class={'p-2'}>
                exclusive
              </p>
              <p q:slot={'1'} class={'p-2'}>
                &
              </p>
              <p q:slot={'2'} class={'p-2'}>
                rounded
              </p>
            </ToggleButtonGroup>
          </div>
        </div>

        <CodeBlock q:slot={'c'} code={code} language={'typescript'} />

        <div q:slot={'p'}>
          <h1 class={'flex place-content-center p-6 text-4xl font-bold'}>
            ToggleButtonMembers
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
                <td>
                  <code>id</code>
                </td>
                <td>
                  <code>number</code>
                </td>
                <td>Unique identifier for the button.</td>
              </tr>
              <tr>
                <td>
                  <code>disabled</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>If true, the button is disabled.</td>
              </tr>
              <tr>
                <td>
                  <code>color</code>
                </td>
                <td>
                  <code>"success"</code>, <code>"error"</code>,{' '}
                  <code>"warning"</code>, <code>"accent"</code>,{' '}
                  <code>"primary"</code>
                </td>
                <td>The color of the button.</td>
              </tr>
              <tr>
                <td>
                  <code>value</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>
                  The initial value of the button (true for active, false for
                  inactive).
                </td>
              </tr>
              <tr>
                <td>
                  <code>onChange</code>
                </td>
                <td>
                  <code>{'QRL(value: boolean) => void'}</code>
                </td>
                <td>
                  Callback function triggered when the button's value changes.
                </td>
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
                <td>
                  <code>members</code>
                </td>
                <td>
                  <code>ToggleButtonMembers[]</code>
                </td>
                <td>List of button members in the group.</td>
              </tr>
              <tr>
                <td>
                  <code>class</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>Custom class names to apply to the button group.</td>
              </tr>
              <tr>
                <td>
                  <code>disabled</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>If true, all buttons in the group are disabled.</td>
              </tr>
              <tr>
                <td>
                  <code>style</code>
                </td>
                <td>
                  <code>CSSProperties</code>
                </td>
                <td>Inline styles to apply to the button group.</td>
              </tr>
              <tr>
                <td>
                  <code>color</code>
                </td>
                <td>
                  <code>"success"</code>, <code>"error"</code>,{' '}
                  <code>"warning"</code>, <code>"accent"</code>,{' '}
                  <code>"primary"</code>
                </td>
                <td>The color of the buttons in the group.</td>
              </tr>
              <tr>
                <td>
                  <code>rounded</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>If true, the buttons in the group have rounded corners.</td>
              </tr>
              <tr>
                <td>
                  <code>raised</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>If true, the buttons in the group appear raised.</td>
              </tr>
              <tr>
                <td>
                  <code>vertical</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>If true, the buttons are arranged vertically.</td>
              </tr>
              <tr>
                <td>
                  <code>exclusive</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>If true, only one button can be active at a time.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/from/toggle-button-group/`
const name:string = 'Toggle Button Group'

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