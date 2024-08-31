import { component$, Slot } from '@builder.io/qwik'
export const DocView = component$(() => {
  return (
    <div class={'grid w-full grid-cols-1 gap-4'}>
      <div class={'flex basis-full text-6xl font-bold'}>
        <Slot name={'h'} />
      </div>
      <div
        class={'w-full basis-full rounded-corner border-width border-primary-0'}
      >
        <Slot name={'e'} />
      </div>
      <Slot name={'c'} />
      <div class={'prop-table overflow-x-scroll '}>
        <Slot name={'p'} />
      </div>
    </div>
  )
})
