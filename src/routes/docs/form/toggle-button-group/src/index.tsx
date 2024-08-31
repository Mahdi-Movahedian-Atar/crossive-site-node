import { component$ } from '@builder.io/qwik'
import { CodeBlock } from '~/components/site-components/code-block'

const cssCode = `.cc-buttonGroup,
.cc-buttonGroup-rounded {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  display: inline-flex;
  flex-wrap: nowrap;
}

.cc-buttonGroup button,
.cc-buttonGroup-rounded button{
  width: 100%;
}

.cc-buttonGroup {
  border-radius: var(--corner);
}

.cc-buttonGroup-rounded {
  border-radius: 100vmax;
}

.cc-buttonGroup-raised {
  box-shadow: 0 var(--width) var(--width) var(--secondary-2);
}

.cc-buttonGroup-content-primary {
  background: var(--primary-0);
  border: var(--primary-0);
  color: var(--primary-0);
  cursor: pointer;
}

.cc-buttonGroup-content-primary:hover {
  background: var(--primary-2);
  border: var(--primary-2);
  color: var(--primary-2);
}

.cc-buttonGroup-content-primary:active {
  background: var(--tertiary-2);
  border: var(--tertiary-2);
  color: var(--tertiary-2);
}

.cc-buttonGroup-content-success {
  background: var(--success-0);
  border: var(--success-0);
  color: var(--success-0);
  cursor: pointer;
}

.cc-buttonGroup-content-success:hover {
  background: var(--success-1);
  border: var(--success-1);
  color: var(--success-1);
}

.cc-buttonGroup-content-success:active {
  background: var(--success-2);
  border: var(--success-2);
  color: var(--success-2);
}

.cc-buttonGroup-content-error {
  background: var(--error-0);
  border: var(--error-0);
  color: var(--error-0);
  cursor: pointer;
}

.cc-buttonGroup-content-error:hover {
  background: var(--error-1);
  border: var(--error-1);
  color: var(--error-1);
}

.cc-buttonGroup-content-error:active {
  background: var(--error-2);
  border: var(--error-2);
  color: var(--error-2);
}

.cc-buttonGroup-content-warning {
  background: var(--warning-0);
  border: var(--warning-0);
  color: var(--warning-0);
  cursor: pointer;
}

.cc-buttonGroup-content-warning:hover {
  background: var(--warning-1);
  border: var(--warning-1);
  color: var(--warning-1);
}

.cc-buttonGroup-content-warning:active {
  background: var(--warning-2);
  border: var(--warning-2);
  color: var(--warning-2);
}

.cc-buttonGroup-content-accent {
  background: var(--accent-0);
  border: var(--accent-0);
  color: var(--accent-0);
  cursor: pointer;
}

.cc-buttonGroup-content-accent:hover {
  background: var(--accent-1);
  border: var(--accent-1);
  color: var(--accent-1);
}

.cc-buttonGroup-content-accent:active {
  background: var(--accent-2);
  border: var(--accent-2);
  color: var(--accent-2);
}

.cc-buttonGroup-content-disabled {
  background: var(--tertiary-0);
  border: var(--tertiary-0);
  color: var(--tertiary-0);
  cursor: auto;
}

.cc-buttonGroup-vertical {
  flex-direction: column;
}

.cc-buttonGroup-outlined {
  border-width: var(--width);
}

.cc-buttonGroup-horizontal .cc-buttonGroup-solid,
.cc-buttonGroup-horizontal .cc-buttonGroup-solid:hover,
.cc-buttonGroup-horizontal .cc-buttonGroup-solid:active {
  color: var(--secondary-0);
  margin-left: var(--width);
  margin-right: var(--width);
}

.cc-buttonGroup-vertical .cc-buttonGroup-solid,
.cc-buttonGroup-vertical .cc-buttonGroup-solid:hover,
.cc-buttonGroup-vertical .cc-buttonGroup-solid:active {
  color: var(--secondary-0);
  margin-top: var(--width);
  margin-bottom: var(--width);
}

.cc-buttonGroup-horizontal button:first-child,
.cc-buttonGroup-horizontal button:first-child:hover,
.cc-buttonGroup-horizontal button:first-child:active {
  border-top-left-radius: var(--corner);
  border-bottom-left-radius: var(--corner);
  border-left-width: var(--width);
  margin-left: unset;
}
.cc-buttonGroup-vertical button:first-child,
.cc-buttonGroup-vertical button:first-child:hover,
.cc-buttonGroup-vertical button:first-child:active {
  border-top-left-radius: var(--corner);
  border-top-right-radius: var(--corner);
  border-top-width: var(--width);
  margin-top: unset;
}
.cc-buttonGroup-horizontal button:last-child,
.cc-buttonGroup-horizontal button:last-child:hover,
.cc-buttonGroup-horizontal button:last-child:active {
  border-top-right-radius: var(--corner);
  border-bottom-right-radius: var(--corner);
  border-right-width: var(--width);
  margin-right: unset;
}
.cc-buttonGroup-vertical button:last-child,
.cc-buttonGroup-vertical button:last-child:hover,
.cc-buttonGroup-vertical button:last-child:active {
  border-bottom-right-radius: var(--corner);
  border-bottom-left-radius: var(--corner);
  border-bottom-width: var(--width);
  margin-bottom: unset;
}

.cc-buttonGroup-rounded.cc-buttonGroup-horizontal button:first-child,
.cc-buttonGroup-rounded.cc-buttonGroup-horizontal button:first-child:hover,
.cc-buttonGroup-rounded.cc-buttonGroup-horizontal button:first-child:active {
  border-top-left-radius: 100vmax;
  border-bottom-left-radius: 100vmax;
}
.cc-buttonGroup-rounded.cc-buttonGroup-vertical button:first-child,
.cc-buttonGroup-rounded.cc-buttonGroup-vertical button:first-child:hover,
.cc-buttonGroup-rounded.cc-buttonGroup-vertical button:first-child:active {
  border-top-left-radius: 100vmax;
  border-top-right-radius: 100vmax;
}
.cc-buttonGroup-rounded.cc-buttonGroup-horizontal button:last-child,
.cc-buttonGroup-rounded.cc-buttonGroup-horizontal button:last-child:hover,
.cc-buttonGroup-rounded.cc-buttonGroup-horizontal button:last-child:active {
  border-top-right-radius: 100vmax;
  border-bottom-right-radius: 100vmax;
}
.cc-buttonGroup-rounded.cc-buttonGroup-vertical button:last-child,
.cc-buttonGroup-rounded.cc-buttonGroup-vertical button:last-child:hover,
.cc-buttonGroup-rounded.cc-buttonGroup-vertical button:last-child:active {
  border-bottom-right-radius: 100vmax;
  border-bottom-left-radius: 100vmax;
}

.cc-buttonGroup-horizontal .cc-buttonGroup-text:last-child,
.cc-buttonGroup-horizontal .cc-buttonGroup-text:last-child:hover,
.cc-buttonGroup-horizontal .cc-buttonGroup-text:last-child:active {
  border-right-width: 0px;
}
.cc-buttonGroup-horizontal .cc-buttonGroup-text:first-child,
.cc-buttonGroup-horizontal .cc-buttonGroup-text:first-child:hover,
.cc-buttonGroup-horizontal .cc-buttonGroup-text:first-child:active {
  border-left-width: 0px;
}
.cc-buttonGroup-vertical .cc-buttonGroup-text:last-child,
.cc-buttonGroup-vertical .cc-buttonGroup-text:last-child:hover,
.cc-buttonGroup-vertical .cc-buttonGroup-text:last-child:active {
  border-bottom-width: 0px;
}
.cc-buttonGroup-vertical .cc-buttonGroup-text:first-child,
.cc-buttonGroup-vertical .cc-buttonGroup-text:first-child:hover,
.cc-buttonGroup-vertical .cc-buttonGroup-text:first-child:active {
  border-top-width: 0px;
}

.cc-buttonGroup-text,
.cc-buttonGroup-text:hover,
.cc-buttonGroup-text:active {
  border-width: 0px;
  background: unset;
}

.cc-buttonGroup-outlined,
.cc-buttonGroup-outlined:hover,
.cc-buttonGroup-outlined:active {
  background: unset;
}

.cc-buttonGroup-horizontal button,
.cc-buttonGroup-horizontal button:hover,
.cc-buttonGroup-horizontal button:active {
  border-style: solid;
  border-right-width: calc(var(--width) * 0.5);
  border-left-width: calc(var(--width) * 0.5);
}

.cc-buttonGroup-vertical button,
.cc-buttonGroup-vertical button:hover,
.cc-buttonGroup-vertical button:active {
  border-style: solid;
  border-top-width: calc(var(--width) * 0.5);
  border-bottom-width: calc(var(--width) * 0.5);
}`

const tsCode = `export interface ToggleButtonMembers {
  id: number
  disabled?: boolean
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  value?: boolean
  onChange?: QRL<(value: boolean) => void>
}

export interface ToggleButtonGroupProps {
  members: ToggleButtonMembers[]
  class?: string
  disabled?: boolean
  style?: CSSProperties
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  rounded?: boolean
  raised?: boolean
  vertical?: boolean
  exclusive?: boolean
}
export const ToggleButtonGroup = component$<ToggleButtonGroupProps>(
  ({
    members,
    disabled,
    class: className,
    style,
    color = 'primary',
    rounded = false,
    raised,
    vertical,
    exclusive = false,
  }) => {
    const values: { [key: number]: boolean | undefined } = useStore({})

    useTask$(async () => {
      members.map((value) => {
        values[value.id] = undefined
      })
    })

    return (
      <div
        ${"class={`${vertical ? 'cc-buttonGroup-vertical' : 'cc-buttonGroup-horizontal'} ${raised && 'cc-buttonGroup-raised'} ${rounded ? 'cc-buttonGroup-rounded' : 'cc-buttonGroup'} ${className}`}"}
        style={style}
      >
        {members.map((value) => {
          const d = disabled || value.disabled
          return (
            <button
              ${"class={`cc-buttonGroup-${(values[value.id] == undefined && value.value) || values[value.id] ? 'solid' : 'outlined'} ${vertical ? 'cc-buttonGroup-vertical' : 'cc-buttonGroup-horizontal'} cc-buttonGroup-content-${d ? 'disabled' : value.color ? value.color : color}`}"}
              onClick$={$(() => {
                if (exclusive) {
                  for (const key in values) {
                    values[key] = false
                  }
                }
                values[value.id] =
                  values[value.id] == undefined
                    ? !value.value
                    : !values[value.id]
                // @ts-ignore
                value.onChange && value.onChange(values[value.id])
              })}
              disabled={d}
            >
              <Slot name={value.id.toString()} />
            </button>
          )
        })}
      </div>
    )
  }
)
`

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
