import { component$ } from '@builder.io/qwik'
import { DocView } from '~/components/site-components/doc-view'
import { CodeBlock } from '~/components/site-components/code-block'
import { Avatar } from '~/components/avatar'
import type {DocumentHead} from "@builder.io/qwik-city";

const code = `export const App = component$(() => {
  return (
    <Avatar
        src="https://example.com/avatar.jpg"
        alt="User Avatar"
        size={4}
        sizeType="rem"
        shape="circle"
        fallback="UA"
        fallbackVariant="text"
        fallbackColor="success"
        width={100}
        height={100}
      />
  );
});`

export default component$(() => {
  return (
    <div>
      <DocView>
        <h1 q:slot={'h'}>Avatar</h1>
        <div q:slot={'e'}>
          <div
            class={
              'grid h-full w-full grid-cols-4 flex-wrap content-center gap-4 border-0 lg:grid-cols-5'
            }
          >
            <Avatar
              alt={'/corrosive.svg'}
              src={'/corrosive.svg'}
              class={'place-self-center justify-self-center'}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              alt={'/corrosive.svg'}
              src={'/corrosive.svg'}
              class={'place-self-center justify-self-center'}
              size={40}
              sizeType={'px'}
            />
            <Avatar
              alt={'/corrosive.svg'}
              src={'/corrosive.svg'}
              class={'place-self-center justify-self-center'}
              size={30}
              sizeType={'px'}
            />
            <Avatar
              alt={'/corrosive.svg'}
              src={'/corrosive.svg'}
              class={'place-self-center justify-self-center'}
              size={20}
              sizeType={'px'}
            />
            <Avatar
              alt={'/corrosive.svg'}
              src={'/corrosive.svg'}
              class={'place-self-center justify-self-center'}
              size={10}
              sizeType={'px'}
            />
            <Avatar
              fallback={'SO'}
              class={'place-self-center justify-self-center'}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              fallback={'SO'}
              class={'place-self-center justify-self-center'}
              fallbackColor={'success'}
              shape={40}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              fallback={'SO'}
              class={'place-self-center justify-self-center'}
              fallbackColor={'error'}
              shape={35}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              fallback={'SO'}
              class={'place-self-center justify-self-center'}
              fallbackColor={'warning'}
              size={50}
              shape={15}
              sizeType={'px'}
            />
            <Avatar
              fallback={'SO'}
              class={'place-self-center justify-self-center'}
              fallbackColor={'accent'}
              shape={'square'}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              fallback={'OL'}
              fallbackVariant={'outlined'}
              class={'place-self-center justify-self-center'}
              shape={'square'}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              fallback={'OL'}
              fallbackVariant={'outlined'}
              class={'place-self-center justify-self-center'}
              fallbackColor={'success'}
              shape={15}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              fallback={'OL'}
              fallbackVariant={'outlined'}
              class={'place-self-center justify-self-center'}
              fallbackColor={'error'}
              shape={35}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              fallback={'OL'}
              fallbackVariant={'outlined'}
              class={'place-self-center justify-self-center'}
              fallbackColor={'warning'}
              shape={40}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              fallback={'OL'}
              fallbackVariant={'outlined'}
              class={'place-self-center justify-self-center'}
              fallbackColor={'accent'}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              fallback={'TX'}
              fallbackVariant={'text'}
              class={'place-self-center justify-self-center'}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              fallback={'TX'}
              fallbackVariant={'text'}
              class={'place-self-center justify-self-center'}
              fallbackColor={'success'}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              fallback={'TX'}
              fallbackVariant={'text'}
              class={'place-self-center justify-self-center'}
              fallbackColor={'error'}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              fallback={'TX'}
              fallbackVariant={'text'}
              class={'place-self-center justify-self-center'}
              fallbackColor={'warning'}
              size={50}
              sizeType={'px'}
            />
            <Avatar
              fallback={'TX'}
              fallbackVariant={'text'}
              class={'place-self-center justify-self-center'}
              fallbackColor={'accent'}
              size={50}
              sizeType={'px'}
            />
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
              <td>class</td>
              <td>string</td>
              <td>
                Custom CSS class for the component. (default: `undefined`)
              </td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>Inline styles for the component. (default: `undefined`)</td>
            </tr>
            <tr>
              <td>src</td>
              <td>string</td>
              <td>
                URL of the image to be displayed in the avatar. (default:
                `undefined`)
              </td>
            </tr>
            <tr>
              <td>alt</td>
              <td>string</td>
              <td>Alt text for the image. (default: `'avatar'`)</td>
            </tr>
            <tr>
              <td>size</td>
              <td>number</td>
              <td>Size of the avatar. (default: `2`)</td>
            </tr>
            <tr>
              <td>sizeType</td>
              <td>'rem' | 'rm' | 'px' | string</td>
              <td>Unit for the size (e.g., `rem`, `px`). (default: `'rem'`)</td>
            </tr>
            <tr>
              <td>shape</td>
              <td>'circle' | 'square' | number</td>
              <td>
                Shape of the avatar (`'circle'`, `'square'`, or a percentage).
                (default: `'circle'`)
              </td>
            </tr>
            <tr>
              <td>fallback</td>
              <td>string</td>
              <td>
                Fallback text to display when the image fails to load. (default:
                `'Fb'`)
              </td>
            </tr>
            <tr>
              <td>fallbackVariant</td>
              <td>'solid' | 'outlined' | 'text'</td>
              <td>Variant of the fallback style. (default: `'solid'`)</td>
            </tr>
            <tr>
              <td>fallbackColor</td>
              <td>'success' | 'error' | 'warning' | 'accent' | 'primary'</td>
              <td>
                Color variant for the fallback style. (default: `'primary'`)
              </td>
            </tr>
            <tr>
              <td>width</td>
              <td>number</td>
              <td>Width of the image (in pixels). (default: `900`)</td>
            </tr>
            <tr>
              <td>height</td>
              <td>number</td>
              <td>Height of the image (in pixels). (default: `900`)</td>
            </tr>
          </tbody>
        </table>
      </DocView>
    </div>
  )
})

export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: 'Corrosive Components - Avatar Component',
  meta: [
    {
      name: 'description',
      content: 'Discover the Avatar component in Corrosive Components. Learn how to use and customize avatars for user profiles, incorporating various styles, sizes, and colors to fit your Qwik project.',
    },
    // Open graph
    {
      property: 'og:title',
      content: 'Corrosive Components - Avatar Component',
    },
    {
      property: 'og:description',
      content: 'Explore the Avatar component in Corrosive Components. Customize and implement avatars for user profiles with different styles, sizes, and colors in your Qwik projects.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: `${import.meta.env.PUBLIC_URL}/docs/display/avatar/`,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Corrosive Components - Avatar Component',
    },
    {
      name: 'twitter:description',
      content: 'Learn how to use the Avatar component from Corrosive Components. Perfect for adding user profiles with customizable styles, sizes, and colors to your Qwik project.',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: `${import.meta.env.PUBLIC_URL}/docs/display/avatar/`,
    },
  ],
};
