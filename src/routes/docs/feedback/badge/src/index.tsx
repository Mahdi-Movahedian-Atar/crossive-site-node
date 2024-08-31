import { component$ } from '@builder.io/qwik'
import { CodeBlock } from '~/components/site-components/code-block'

const cssCode = `.cc-badge {
  border: solid var(--width);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-align: center;
  font-weight: bold;
  padding: var(--width);
  margin: 0;
  box-sizing: border-box;
}

.cc-badge-top-right {
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}

.cc-badge-top-left {
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}

.cc-badge-bottom-right {
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
}

.cc-badge-bottom-left {
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
}

.cc-badge-primary {
  background: var(--primary-0);
  border-color: var(--primary-0);
  color: var(--primary-0);
}

.cc-badge-success {
  background: var(--success-0);
  border-color: var(--success-0);
  color: var(--success-0);
}

.cc-badge-error {
  background: var(--error-0);
  border-color: var(--error-0);
  color: var(--error-0);
}

.cc-badge-warning {
  background: var(--warning-0);
  border-color: var(--warning-0);
  color: var(--warning-0);
}

.cc-badge-accent {
  background: var(--accent-0);
  border-color: var(--accent-0);
  color: var(--accent-0);
}

.cc-badge-solid {
  color: var(--secondary-0);
}

.cc-badge-outlined {
  background: unset;
}

.cc-badge-text {
  background: unset;
  border: unset;
}`

const tsCode = `${'export interface BadgeProps {'}
  class?: string
  style?: CSSProperties
  size?: number
  sizeType?: 'rem' | 'rm' | 'px' | string
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  shape?: 'circle' | 'square' | number
  variant?: 'solid' | 'outlined' | 'text'
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
}

export const Badge = component$<BadgeProps>(
  ({
    class: className,
    style = {
      height: 0,
      width: 0,
    },
    size = 15,
    sizeType = 'px',
    shape = 'circle',
    position = 'top-right',
    variant = 'solid',
    color = 'primary',
  }) => {
    const thisStyles = {
      'font-size': size.toString() + sizeType,
      width: 'fit-content',
      height: 'fit-content',
      borderRadius:
        shape === 'circle'
          ? '50vmax'
          : shape === 'square'
            ? '0%'
            : shape.toString() + 'vmax',
    }

    return (
      <div class={className} style={style}>
        <span
          ${'class={`cc-badge cc-badge-${position} cc-badge-${color} cc-badge-${variant}`}'}
          style={thisStyles}
        >
          <Slot />
        </span>
      </div>
    )
  }
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
