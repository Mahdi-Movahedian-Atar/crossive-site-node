import { component$ } from '@builder.io/qwik'
import { CodeBlock } from '~/components/site-components/code-block'

const cssCode = `.cc-avatar {
  display: inline-block;
  overflow: hidden;
  text-align: center;
  line-height: 1;
  font-weight: bold;
  position: relative;
}

.cc-avatar img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cc-avatar-fallback {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.cc-avatar-primary > div {
  background: var(--primary-0);
  border-color: var(--primary-0);
  color: var(--primary-0);
}

.cc-avatar-success > div {
  background: var(--success-0);
  border-color: var(--success-0);
  color: var(--success-0);
}

.cc-avatar-error > div {
  background: var(--error-0);
  border-color: var(--error-0);
  color: var(--error-0);
}

.cc-avatar-warning > div {
  background: var(--warning-0);
  border-color: var(--warning-0);
  color: var(--warning-0);
}

.cc-avatar-accent > div {
  background: var(--accent-0);
  border-color: var(--accent-0);
  color: var(--accent-0);
}

.cc-avatar-solid > div {
  border-radius: inherit;
  border: solid var(--width);
  color: var(--secondary-0);
}

.cc-avatar-outlined > div {
  border-radius: inherit;
  border: solid var(--width);
  background: unset;
}

.cc-avatar-text > div {
  background: unset;
  border: unset;
}`

const tsCode = `${'export interface AvatarProps {'}
  class?: string
  style?: CSSProperties
  src?: string
  alt?: string
  size?: number
  sizeType?: 'rem' | 'rm' | 'px' | string
  shape?: 'circle' | 'square' | number
  fallback?: string
  fallbackVariant?: 'solid' | 'outlined' | 'text'
  fallbackColor?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  width?: number
  height?: number
}
 
export const Avatar = component$<AvatarProps>(
  ({
    class: className,
    style,
    src,
    alt = 'avatar',
    size = 2,
    sizeType = 'rem',
    shape = 'circle',
    fallbackVariant = 'solid',
    fallbackColor = 'primary',
    fallback = 'Fb',
    width = 900,
    height = 900,
  }) => {
    const thisStyles = {
      'font-size': size.toString() + sizeType,
      width: (size * 2).toString() + sizeType,
      height: (size * 2).toString() + sizeType,
      borderRadius:
        shape === 'circle'
          ? '50%'
          : shape === 'square'
            ? '0%'
            : shape.toString() + '%',
    }

    const srcError = useSignal(false)

    return (
      <div class={className} style={style}>
        <div
          ${'class={`cc-avatar cc-avatar-${fallbackVariant} cc-avatar-${fallbackColor}`}'}
          style={thisStyles}
        >
          {src && !srcError.value ? (
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              onError$={$(() => (srcError.value = true))}
            />
          ) : (
            <div class={'cc-avatar-fallback'}>{fallback.toUpperCase()}</div>
          )}
        </div>
        <Slot />
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
