import { component$ } from '@builder.io/qwik'
import { CodeBlock } from '~/components/site-components/code-block'

const cssCode = `@keyframes wave {
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(200%);
  }
}
@keyframes pulse {
  0% {
    opacity: 0%;
  }
  25% {
    opacity: 0%;
  }
  50% {
    opacity: 100%;
  }
  75% {
    opacity: 0%;
  }
  100% {
    opacity: 0%;
  }
}

.cc-skeleton {
  border-radius: var(--corner);
  overflow: hidden;
}
.cc-skeleton-rounded {
  border-radius: 100vh;
}

.cc-skeleton-primary {
  background: var(--primary-0);
  border-color: var(--primary-0);
  color: var(--primary-2);
}
.cc-skeleton-success {
  background: var(--success-0);
  border-color: var(--success-0);
  color: var(--success-1);
}
.cc-skeleton-error {
  background: var(--error-0);
  border-color: var(--error-0);
  color: var(--error-1);
}
.cc-skeleton-warning {
  background: var(--warning-0);
  border-color: var(--warning-0);
  color: var(--warning-1);
}
.cc-skeleton-accent {
  background: var(--accent-0);
  border-color: var(--accent-0);
  color: var(--accent-1);
}

.cc-skeleton-outlined {
  background: unset;
  border: solid var(--width);
}

.cc-skeleton-wave::after,
.cc-skeleton-pulse::after {
  display: inline-block;
  content: '';
  width: 200%;
  height: 100%;
}
.cc-skeleton-wave::after {
  animation: wave 2s ease-in-out infinite;
  background-image: linear-gradient(
    to right,
    transparent,
    currentColor,
    currentColor,
    transparent
  );
}
.cc-skeleton-pulse::after {
  animation: pulse 2s ease-in-out infinite;
  background: currentColor;
}`

const tsCode = `${'export interface skeletonProps {'}
  height?: string
  width?: string
  animation?: 'wave' | 'pulse' | 'none'
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  variant?: 'solid' | 'outlined'
  rounded?: boolean
  class?: string
  style?: CSSProperties
}

export const Skeleton = component$<skeletonProps>(
  ({
    height = '100%',
    width = '100%',
    animation = 'wave',
    color = 'primary',
    variant = 'solid',
    rounded = false,
    class: className = undefined,
    style = {
      display: 'inline-flex',
      height: '100%',
      width: '100%',
      alignContent: 'center',
    },
  }) => (
    <div style={style} class={className}>
      <div
        style={{ height, width }}
        ${"class={`cc-skeleton ${rounded && 'cc-skeleton-rounded'} cc-skeleton-${animation} cc-skeleton-${color} cc-skeleton-${variant}`}"}
      />
    </div>
  )
)`

export default component$(() => {
  return (
    <div class={'mt-2 grid w-full grid-cols-1 gap-2 lg:grid-cols-2'}>
      <div>
        <h1 class={'m-4 text-6xl font-bold'}>TypeScript</h1>
        <CodeBlock code={tsCode} language={'typescript'} />
      </div>
      <div>
        <h1 class={'m-4 text-6xl font-bold'}>CSS</h1>
        <CodeBlock code={cssCode} language={'css'} />
      </div>
    </div>
  )
})
