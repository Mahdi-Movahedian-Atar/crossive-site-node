import { component$, useStylesScoped$ } from '@builder.io/qwik'
import style from '../style.css?inline'
import { CodeBlock } from '~/components/site-components/code-block'
import type {DocumentHead} from "@builder.io/qwik-city";

export default component$(() => {
  useStylesScoped$(style)

  return (
    <div class={'markdown'}>
      <h1>Styling Overview</h1>
      <p>
        Styles in corrosive components consist of two parts,{' '}
        <strong>Resources</strong> which contain the variables and{' '}
        <strong>Styles</strong> which contain the regular styles.
      </p>
      <p>
        Default style is <strong>DefaultStyle</strong> and resources are{' '}
        <strong>DefaultResources</strong> and{' '}
        <strong>DefaultDarkResources</strong> which are compiled inline CSS
        files.
      </p>
      <h2>Resources</h2>
      <p>
        Resources contain the following variables. note that each colour has 3
        variants with multiple shades of the same color.
      </p>
      <CodeBlock
        code={`:root {
  --primary-0: #000000;
  --primary-1: #252525;
  --primary-2: #3b3b3b;
  --secondary-0: #ffffff;
  --secondary-1: #d7d7d7;
  --secondary-2: #afafaf;
  --tertiary-0: #838383;
  --tertiary-1: #656565;
  --tertiary-2: #989898;

  --accent-0: #ff6a00;
  --accent-1: #803500;
  --accent-2: #411c00;
  --success-0: #16ff00;
  --success-1: #0e8f00;
  --success-2: #053800;
  --error-0: #ff0000;
  --error-1: #7c0000;
  --error-2: #4b0000;
  --warning-0: #ffdd00;
  --warning-1: #7c6a00;
  --warning-2: #463c00;

  --width: 0.15rem;
  --corner: 0.5rem;
  --maxCorner: screen;

  --small-icon: 0.8lh;
  --medium-icon: 1lh;
  --large-icon: 1.5lh;
}`}
        language={'CSS'}
      />
      <p class={'mt-3'}>
        You can adjust these variables using the following code.
      </p>
      <pre>
        <code>document.documentElement.style.setProperty('name','value')</code>
      </pre>
      <h2>Tailwind</h2>
      <p>
        You use the following code to use these variables in with tailwind classes.
      </p>
      <CodeBlock
        code={`/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary-0': 'var(--primary-0)',
        'primary-1': 'var(--primary-1)',
        'primary-2': 'var(--primary-2)',
        'secondary-0': 'var(--secondary-0)',
        'secondary-1': 'var(--secondary-1)',
        'secondary-2': 'var(--secondary-2)',
        'tertiary-0': 'var(--tertiary-0)',
        'tertiary-1': 'var(--tertiary-1)',
        'tertiary-2': 'var(--tertiary-2)',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'success-0': 'var(--success-0)',
        'success-1': 'var(--success-1)',
        'success-2': 'var(--success-2)',
        'error-0': 'var(--error-0)',
        'error-1': 'var(--error-1)',
        'error-2': 'var(--error-2)',
        'warning-0': 'var(--warning-0)',
        'warning-1': 'var(--warning-1)',
        'warning-2': 'var(--warning-2)',
      },
      width: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
      padding: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
      borderWidth: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
      spacing: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
      borderRadius: {
        width: 'var(--width)',
        corner: 'var(--corner)',
      },
    },
  },
  plugins: [],
}
`}
        language={'JavaScript'}
      />
    </div>
  )
})

export const head: DocumentHead = {
    // This will be used to resolve the <title> of the page
    title: 'Corrosive Components - Styling Guide',
    meta: [
        {
            name: 'description',
            content: 'Explore the styling guide for Corrosive Components. Learn how to customize and apply styles using resources and variables to build consistent and visually appealing UIs in your Qwik projects.',
        },
        // Open graph
        {
            property: 'og:title',
            content: 'Corrosive Components - Styling Guide',
        },
        {
            property: 'og:description',
            content: 'Master the art of styling with Corrosive Components. Our guide walks you through the use of resources, variables, and Tailwind integration for creating visually consistent and customizable UIs.',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            property: 'og:url',
            content: `${import.meta.env.PUBLIC_URL}/docs/installation/styling/`,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: 'Corrosive Components - Styling Guide',
        },
        {
            name: 'twitter:description',
            content: 'Learn how to apply and customize styles in Corrosive Components using our comprehensive styling guide. Perfect for building consistent and customizable UIs in Qwik.',
        },
    ],
    links: [
        {
            rel: 'canonical',
            href: `${import.meta.env.PUBLIC_URL}/docs/installation/styling/`,
        },
    ],
};
