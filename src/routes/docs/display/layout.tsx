import { $, component$, Slot } from '@builder.io/qwik'
import { useLocation, useNavigate } from '@builder.io/qwik-city'
import { ButtonGroup } from '../../../../../corrosive-components'

export default component$(() => {
  const nav = useNavigate()
  const loc = useLocation()

  return (
    <>
      <ButtonGroup
        members={[
          {
            id: 0,
            onClick: $(() => {
              const path = loc.url.pathname
              path.includes('src') && nav(path.slice(0, path.length - 4))
            }),
          },
          {
            id: 1,
            onClick: $(() => {
              const path = loc.url.pathname
              !path.includes('src') && nav(path + 'src/')
            }),
          },
        ]}
      >
        <h1 class={'p-2'} q:slot={'0'}>
          Information
        </h1>
        <h1 class={'p-2'} q:slot={'1'}>
          Source Code
        </h1>
      </ButtonGroup>
      <Slot />
    </>
  )
})
