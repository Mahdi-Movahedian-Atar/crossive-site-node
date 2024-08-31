import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { TreeView } from '~/components/tree-view'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  const nodes = useStore([
    {
      id: 1,
      label: 'Parent 1',
      expanded: true,
      children: [
        { id: 2, label: 'Child 1.1' },
        { id: 3, label: 'Child 1.2' },
      ],
    },
    {
      id: 4,
      label: 'Parent 2',
      children: [
        { id: 5, label: 'Child 2.1' },
        {
          id: 6,
          label: 'Child 2.2',
          expanded: true,
          children: [
            { id: 7, label: 'Sub Child 2.2.1' },
            { id: 8, label: 'Sub Child 2.2.2' },
          ],
        },
      ],
    },
  ]);

  const handleSelect = $((id) => {
    console.log('Selected Node ID:', id);
  });

  return (
    <div>
      <h1>TreeView Example</h1>
      <TreeView
        nodes={nodes}
        onSelect={handleSelect}
        class="custom-treeview"
        style={{ border: '1px solid #ccc', padding: '10px' }}
      />
    </div>
  );
})`

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Tree View</h1>
        <div
          class={'flex w-full flex-col items-center justify-center gap-2 p-4'}
          q:slot={'e'}
        >
          <TreeView
            class={'h-40 w-60'}
            nodes={[
              {
                id: 1,
                label: 'Parent 1',
                expanded: true,
                children: [
                  { id: 2, label: 'Child 1.1' },
                  { id: 3, label: 'Child 1.2' },
                ],
              },
              {
                id: 4,
                label: 'Parent 2',
                children: [
                  { id: 5, label: 'Child 2.1' },
                  {
                    id: 6,
                    label: 'Child 2.2',
                    expanded: true,
                    children: [
                      { id: 7, label: 'Sub Child 2.2.1' },
                      { id: 8, label: 'Sub Child 2.2.2' },
                    ],
                  },
                ],
              },
            ]}
          />
        </div>

        <CodeBlock q:slot={'c'} code={code} language={'typescript'} />

        <div q:slot={'p'}>
          <h1 class={'flex place-content-center p-6 text-4xl font-bold'}>
            TreeNode
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
                  <code>any</code>
                </td>
                <td>Unique identifier for the tree node.</td>
              </tr>
              <tr>
                <td>
                  <code>label</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>The text label displayed for the tree node.</td>
              </tr>
              <tr>
                <td>
                  <code>expanded</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>
                  Determines whether the node's children are expanded (visible).
                  Default is <code>false</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>children</code>
                </td>
                <td>
                  <code>TreeNode[]</code>
                </td>
                <td>
                  An array of child nodes, allowing for hierarchical nesting.
                </td>
              </tr>
              <tr>
                <td>
                  <code>isToggleDisabled</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>
                  Disables the ability to expand/collapse the node if set to{' '}
                  <code>true</code>. Default is <code>false</code>.
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
                <th>Prop</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>nodes</code>
                </td>
                <td>
                  <code>TreeNode[]</code>
                </td>
                <td>The array of tree nodes to be displayed.</td>
              </tr>
              <tr>
                <td>
                  <code>disableAll</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>
                  Disables interaction with all nodes when set to{' '}
                  <code>true</code>. Default is <code>false</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>toggleComponent</code>
                </td>
                <td>
                  <code>
                    {'Component{ node: TreeNode; isExpanded: boolean }'}
                  </code>
                </td>
                <td>
                  Component used to render the toggle icon. Default is a simple
                  arrow icon component.
                </td>
              </tr>
              <tr>
                <td>
                  <code>contentComponent</code>
                </td>
                <td>
                  <code>
                    {'Component{ node: TreeNode; isExpanded: boolean }'}
                  </code>
                </td>
                <td>
                  Component used to render the content of each node. Default is
                  a simple text component displaying the node's label.
                </td>
              </tr>
              <tr>
                <td>
                  <code>class</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  Custom CSS classes applied to the tree view container. Default
                  is <code>undefined</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>style</code>
                </td>
                <td>
                  <code>CSSProperties</code>
                </td>
                <td>
                  Inline styles applied to the tree view container. Default is{' '}
                  <code>undefined</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>onSelect</code>
                </td>
                <td>
                  <code>QRL&lt;(id: any) =&gt; undefined&gt;</code>
                </td>
                <td>
                  Callback function triggered when a node is selected. Default
                  is <code>undefined</code>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocView>
    </div>
  )
})

const url:string = `${import.meta.env.PUBLIC_URL}/docs/display/tree-view/`
const name:string = 'Tree View'

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