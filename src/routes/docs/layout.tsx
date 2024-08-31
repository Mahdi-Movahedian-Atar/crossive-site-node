import { $, component$, Slot, useSignal } from '@builder.io/qwik'
import { type TreeNode, TreeView } from '~/components/tree-view'
import { useNavigate } from '@builder.io/qwik-city'
import { Button } from '~/components/button'

export default component$(() => {
  const bar = useSignal(true)

  const nav = useNavigate()

  const tc = $((props: { node: TreeNode; isExpanded: boolean }) => {
    return (
      <div class={'flex'}>
        <i
          class={`${props.node.id[1] ? (props.isExpanded ? 'cc-shortArrow-down' : 'cc-shortArrow-left') : 'text-transparent'} cc-icon-large`}
        />
        {props.node.id[1] && <p class={`m-1`}>{props.node.label}</p>}
      </div>
    )
  })

  const cc = $((props: { node: TreeNode; isExpanded: boolean }) => {
    return (
      <p style={{ display: props.node.id[1] ? 'none' : 'block' }}>
        {props.node.label}
      </p>
    )
  })

  return (
    <div class={'flex'}>
      <div class={'fixed h-full w-fit p-2'}>
        <Button
          class={'w-6'}
          variant={'text'}
          onClick={$(() => (bar.value = !bar.value))}
        >
          <i
            style={{
              mask: 'url(/icons/menu.svg)',
              maskSize: 'cover',
              color: 'var(--primary-0)',
            }}
            class={'cc-icon-large'}
          />
        </Button>
      </div>
      {bar.value && (
        <div
          style={{ paddingBottom: '5rem' , scrollbarWidth: 'thin'}}
          class={
            'sm:w-46 fixed left-10 h-screen w-full overflow-y-auto overflow-x-hidden'
          }
        >
          <TreeView
            class={'mt-2 w-40'}
            contentComponent={cc as any}
            toggleComponent={tc as any}
            onSelect={$((id) => {
              console.log('ssss')
              if (!id[1]) {
                nav(`/docs/${id[0]}`)
              }
            })}
            nodes={[
              {
                id: [{}, true],
                label: 'Installation',
                expanded: true,
                children: [
                  {
                    id: ['installation/installation', false],
                    label: 'installation',
                  },
                  {
                    id: ['installation/styling', false],
                    label: 'styling',
                  },
                ],
              },
              {
                id: [{}, true],
                label: 'Form',
                expanded: true,
                children: [
                  {
                    id: ['form/button', false],
                    label: 'Button',
                  },
                  {
                    id: ['form/button-group', false],
                    label: 'Button Group',
                  },
                  {
                    id: ['form/file-input', false],
                    label: 'File Input',
                  },
                  {
                    id: ['form/input', false],
                    label: 'Input',
                  },
                  {
                    id: ['form/select', false],
                    label: 'Select',
                  },
                  {
                    id: ['form/text-area', false],
                    label: 'Text Area',
                  },
                  {
                    id: ['form/toggle', false],
                    label: 'Toggle',
                  },
                  {
                    id: ['form/toggle-button', false],
                    label: 'Toggle Button',
                  },
                  {
                    id: ['form/toggle-button-group', false],
                    label: 'Toggle Group',
                  },
                  {
                    id: ['form/slider', false],
                    label: 'Slider',
                  },
                ],
              },
              {
                id: [{}, true],
                label: 'Data Display',
                expanded: true,
                children: [
                  {
                    id: ['display/avatar', false],
                    label: 'Avatar',
                  },
                  {
                    id: ['display/divider', false],
                    label: 'Divider',
                  },
                  {
                    id: ['display/expandable', false],
                    label: 'Expandable',
                  },
                  {
                    id: ['display/overlay', false],
                    label: 'Overlay',
                  },
                  {
                    id: ['display/resizable-panels', false],
                    label: 'Resizable',
                  },
                  {
                    id: ['display/scroll-panel', false],
                    label: 'Scroll Panel',
                  },
                  {
                    id: ['display/tooltip', false],
                    label: 'Tooltip',
                  },
                  {
                    id: ['display/tree-view', false],
                    label: 'Tree View',
                  },
                ],
              },
              {
                id: [{}, true],
                label: 'Feedback',
                expanded: true,
                children: [
                  {
                    id: ['feedback/badge', false],
                    label: 'Badge',
                  },
                  {
                    id: ['feedback/progress', false],
                    label: 'Progress',
                  },
                  {
                    id: ['feedback/skeleton', false],
                    label: 'Skeleton',
                  },
                  {
                    id: ['feedback/toast', false],
                    label: 'Toast',
                  },
                ],
              },
            ]}
          />
        </div>
      )}
      <div class={`w-12 ${bar.value && 'sm:w-72'}`} />
      <div
        class={`h-full min-h-screen w-full border-l-width border-l-primary-0 p-2 ${bar.value && 'hidden'} sm:block overflow-x-hidden`}
      >
        <Slot />
      </div>
    </div>
  )
})
