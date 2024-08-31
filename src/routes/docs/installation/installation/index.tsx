import { component$, useStylesScoped$ } from '@builder.io/qwik'
import style from '../style.css?inline'
import { CodeBlock } from '~/components/site-components/code-block'
import type {DocumentHead} from '@builder.io/qwik-city';
import { Link} from '@builder.io/qwik-city'

export default component$(() => {
  useStylesScoped$(style)

  return (
    <div class={'markdown'}>
      <h1>Crossive Components Installation Guide</h1>

      <p>
        Welcome to the <strong>Crossive Components</strong> library! This guide
        will walk you through the installation process and show you how to use
        the components in your Qwik project. You can also directly copy and
        paste the component source code if you prefer not to install the
        package.
      </p>

      <h2>Installation via NPM or Bun</h2>
      <p>
        You can install the <strong>Crossive Components</strong> library using
        npm or bun. Run the following command in your project directory:
      </p>

      <pre>
        <code>npm install crossive-components</code>
      </pre>
      <pre>
        <code>bun install crossive-components</code>
      </pre>

      <p>
        Add <strong>useStyles(DefaultStyle)</strong> with{' '}
        <strong>useStyles(DefaultResources)</strong> or{' '}
        <strong>useStyles(DefaultDarkResources)</strong> to the root layout
        element to apply styles.
      </p>
      <CodeBlock code={`import {
  DefaultResources, //or(DefaultDarkResources)
  DefaultStyle,
} from 'corrosive-components'
      
export default component$(() => {
  useStyles$(DefaultResources) //or(useStyles$(DefaultDarkResources))
  useStyles$(DefaultStyle)
  
  return(
    //content
    )
})`} language={'JavaScript'}/>
      <p>
        See the{' '}
        <Link
          href={'/docs/installation/styling'}
          class={'text-accent-0 underline'}
        >
          styling
        </Link>{' '}
        section for more details.
      </p>

      <h2>Directly Copying Component Source Code</h2>
      <p>
        If you prefer not to install the package, you can directly copy the
        source code for individual components and their styles and use them in
        your project.
      </p>
      <p>
        Note that you still need to add <strong>DefaultResources</strong> or{' '}
        <strong>DefaultDarkResources</strong> to the root layout element.
      </p>
    </div>
  )
})

export const head: DocumentHead = {
    title: 'Corrosive Components - Installation Guide',
    meta: [
        {
            name: 'description',
            content: 'Learn how to install Corrosive Components, a high-performance UI library for the Qwik framework. Follow our easy step-by-step installation guide to integrate our components into your project.',
        },
        // Open graph
        {
            property: 'og:title',
            content: 'Corrosive Components - Installation Guide',
        },
        {
            property: 'og:description',
            content: 'Step-by-step installation guide for Corrosive Components, a powerful and flexible UI component library for the Qwik framework. Start building faster, more efficient web applications today.',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            property: 'og:url',
            content: `${import.meta.env.PUBLIC_URL}/docs/installation/installation/`,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: 'Corrosive Components - Installation Guide',
        },
        {
            name: 'twitter:description',
            content: 'Follow our installation guide to set up Corrosive Components, the high-performance UI component library designed for the Qwik framework. Get started quickly and easily.',
        },
    ],
    links: [
        {
            rel: 'canonical',
            href: `${import.meta.env.PUBLIC_URL}/docs/installation/installation/`,
        },
    ],
};