import { component$ } from '@builder.io/qwik'
import { CodeBlock } from '~/components/site-components/code-block'

const cssCode = `.cc-tooltip {
  border: solid var(--width);
  border-radius: var(--corner);
  padding: var(--width);
  position: absolute;
  white-space: nowrap;
  z-index: 1000;
}

.cc-tooltip::after {
  content: '';
  position: absolute;
  border: 0.5rem solid transparent;
  border-radius: var(--corner);
}

.cc-tooltip-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10%;
}

.cc-tooltip-top::after {
  top: calc(100% - var(--width));
  left: 50%;
  border-top-color: inherit;
  transform: translateX(-50%);
}
.cc-tooltip-right {
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  margin-left: 20%;
}
.cc-tooltip-right::after {
  top: 50%;
  right: calc(100% - var(--width));
  border-right-color: inherit;
  transform: translateY(-50%);
}

.cc-tooltip-bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10%;
}
.cc-tooltip-bottom::after {
  bottom: calc(100% - var(--width));
  left: 50%;
  border-bottom-color: inherit;
  transform: translateX(-50%);
}

.cc-tooltip-left {
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
  margin-right: 10%;
}

.cc-tooltip-left::after {
  top: 50%;
  left: calc(100% - var(--width));
  border-left-color: inherit;
  transform: translateY(-50%);
}

.cc-tooltip-primary {
  background: var(--primary-0);
  border-color: var(--primary-0);
  color: var(--primary-0);
}

.cc-tooltip-success {
  background: var(--success-0);
  border-color: var(--success-0);
  color: var(--success-0);
}

.cc-tooltip-error {
  background: var(--error-0);
  border-color: var(--error-0);
  color: var(--error-0);
}

.cc-tooltip-warning {
  background: var(--warning-0);
  border-color: var(--warning-0);
  color: var(--warning-0);
}

.cc-tooltip-accent {
  background: var(--accent-0);
  border-color: var(--accent-0);
  color: var(--accent-0);
}

.cc-tooltip-disabled {
  background: var(--tertiary-0);
  border: var(--tertiary-0);
  color: var(--tertiary-0);
}

.cc-tooltip-solid {
  color: var(--secondary-0);
}

.cc-tooltip-outlined {
  background: unset;
}

.cc-tooltip-text {
  background: unset;
  border: unset;
}`

const tsCode = `${'export interface TooltipProps {'}
  isActive?: boolean
  disabled?: boolean
  position?: 'top' | 'right' | 'bottom' | 'left'
  delay?: number
  class?: string
  style?: CSSProperties
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  variant?: 'solid' | 'outlined' | 'text'
}

export function delayQrl<T>(fn: QRL<() => T>, delayInMs: number): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      res(fn())
    }, delayInMs)
  })
}

export const delay$ = implicit$FirstArg(delayQrl)

export const Tooltip = component$<TooltipProps>(
  ({
    isActive = false,
    disabled = false,
    position = 'top',
    delay = 0,
    class: className = undefined,
    style = {
      position: 'relative',
      height: 'fit-content',
      width: 'fit-content',
    },
    variant = 'outlined',
    color = 'primary',
  }) => {
    const visible = useSignal(false)

    const showTooltip = $(() => {
      !disabled &&
        delay$(() => {
          visible.value = true
        }, delay)
    })

    const hideTooltip = $(() => {
      !disabled &&
        delay$(() => {
          visible.value = false
        }, delay)
    })

    return (
      <span
        style={style}
        class={className}
        onMouseEnter$={showTooltip}
        onMouseLeave$={hideTooltip}
      >
        <Slot />
        {(isActive || visible.value) && (
          <div
            ${"class={`cc-tooltip cc-tooltip-${position} cc-tooltip-${disabled ? 'disabled' : color} cc-tooltip-${variant}`}"}
          >
            <Slot name={'content'} />
          </div>
        )}
      </span>
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
