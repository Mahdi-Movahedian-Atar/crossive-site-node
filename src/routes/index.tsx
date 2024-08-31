import ImgCorrosive from '/public/corrosive.svg?jsx'
import { $, component$, useSignal } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Button, Divider } from 'corrosive-components'
import { ResizablePanels } from '~/components/resizable-panels'
import { Progress } from '~/components/progress'
import { Avatar } from '~/components/avatar'
import { Slider } from '~/components/slider'
import { Input } from '~/components/input'
import { FileInput } from '~/components/file-input'
import { Select } from '~/components/select'
import { Toggle } from '~/components/toggle'
import { useNavigate } from '@builder.io/qwik-city'

export default component$(() => {

  const nav = useNavigate()

  const ref = useSignal<Element>()

  const party = $(() => {
    if (ref.value) {
      const letters = '0123456789ABCDEF'
      const randomColor = () => {
        let color = '#'
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)]
        }
        return color
      }
      const f = () => {
        // @ts-ignore
        ref.value.style.setProperty('--primary-0', randomColor())
        // @ts-ignore
        ref.value.style.setProperty('--secondary-0', randomColor())
        // @ts-ignore
        ref.value.style.setProperty('--tertiary-0', randomColor())
        // @ts-ignore
        ref.value.style.setProperty('--accent-0', randomColor())
        // @ts-ignore
        ref.value.style.setProperty('--success-0', randomColor())
        // @ts-ignore
        ref.value.style.setProperty('--error-0', randomColor())
        // @ts-ignore
        ref.value.style.setProperty('--warning-0', randomColor())
        // @ts-ignore
        ref.value.style.setProperty('--warning-0', randomColor())
        // @ts-ignore
        ref.value.style.setProperty('--width', `${Math.random()}rem`)
        // @ts-ignore
        ref.value.style.setProperty('--corner', `${Math.random() * 10}rem`)
      }

      setInterval(f, 300)
    }
  })

  return (
    <>
      <div class={'grid h-screen w-full grid-cols-1 lg:grid-cols-2'}>
        <div class={'grid grid-cols-3 justify-items-center'}>
          <ImgCorrosive class={'h-full w-full'} />
          <div
            class={'text-1xl col-span-2 content-center text-center font-bold text-3xl'}
          >
            <h1>Corrosive Component</h1>
            <h1>Qwiks quickest Component library</h1>
            <h1>Based on tree Corrosive Commitments </h1>
          </div>
          <Button
            class={'h-fit w-40'}
            onClick={$(() => nav('/docs/installation/installation'))}
          >
            <p class={'flex justify-center p-2'}>
              Getting Started{' '}
              <i
                style={{
                  mask: 'url(icons/arrow-right.svg)',
                  maskSize: 'cover',
                }}
                class={'cc-icon-medium'}
              />
            </p>
          </Button>
          <Button
            class={'h-fit w-40'}
            onClick={$(() => nav('/docs/installation/installation'))}
          >
            <p class={'flex justify-center p-2'}>
              Docs{' '}
              <i
                style={{
                  mask: 'url(icons/file-text.svg)',
                  maskSize: 'cover',
                }}
                class={'cc-icon-medium'}
              />
            </p>
          </Button>
          <Button class={'h-fit w-40'} onClick={party}>
            <p class={'flex justify-center p-2'}>
              Party{' '}
              <i
                style={{
                  mask: 'url(icons/arrow-right.svg)',
                  maskSize: 'cover',
                }}
                class={'cc-icon-medium'}
              />
            </p>
          </Button>
        </div>
        <div
          class={
            'm-2 grid h-screen grid-cols-12 grid-rows-3 rounded-corner border-width border-primary-0 bg-secondary-0 bg-opacity-0 p-2'
          }
          ref={ref}
        >
          <ResizablePanels class={'col-span-12'} defaultOffset={60}>
            <div
              q:slot={'firstPanel'}
              class={
                'grid h-full w-full grid-cols-3 grid-rows-2 flex-wrap content-center gap-4 border-0'
              }
            >
              <Avatar
                alt={'/corrosive.svg'}
                src={'/corrosive.svg'}
                class={'place-self-center justify-self-center'}
                size={50}
                sizeType={'px'}
              />
              <Avatar
                fallback={'AV'}
                class={'place-self-center justify-self-center'}
                fallbackVariant={'text'}
                size={50}
                sizeType={'px'}
              />
              <Avatar
                fallback={'CC'}
                class={'place-self-center justify-self-center'}
                fallbackColor={'accent'}
                size={50}
                sizeType={'px'}
              />
              <Avatar
                class={'place-self-center justify-self-center'}
                fallbackVariant={'outlined'}
                fallbackColor={'warning'}
                size={50}
                sizeType={'px'}
              />
              <Avatar
                fallback={'AV'}
                class={'place-self-center justify-self-center'}
                fallbackVariant={'outlined'}
                fallbackColor={'error'}
                size={50}
                sizeType={'px'}
              />
              <Avatar
                fallback={'CC'}
                class={'place-self-center justify-self-center'}
                fallbackColor={'success'}
                size={50}
                sizeType={'px'}
              />
            </div>
            <div
              q:slot={'secondPanel'}
              class={
                'grid h-full w-full grid-rows-5 flex-wrap content-center gap-4 border-0 p-5'
              }
            >
              <Progress
                class={'w-full'}
                type={'linear'}
                progress={25}
                variant={'value'}
                color={'warning'}
              />
              <Progress
                class={'w-full'}
                type={'linear'}
                progress={0}
                color={'error'}
              />
              <Progress
                class={'w-full'}
                type={'linear'}
                progress={50}
                variant={'value'}
                color={'success'}
              />
              <Progress
                class={'w-full'}
                type={'linear'}
                progress={70}
                variant={'value'}
                color={'accent'}
              />
              <Progress class={'w-full'} type={'linear'} progress={0} />
            </div>
          </ResizablePanels>
          <div class={'col-span-12 grid grid-rows-5 p-5'}>
            <Slider defaultMin={75} type={'minRange'} />
            <Slider defaultMax={70} steps={10} color={'success'} />
            <Slider
              defaultMin={25}
              defaultMax={80}
              type={'dual'}
              color={'warning'}
            />
            <Slider defaultMin={0} defaultMax={60} color={'error'} />
            <Slider steps={5} type={'dual'} color={'accent'} />
          </div>
          <Divider class={'col-span-12'} variant={'text'} offset={60}>
            <div
              q:slot={'firstPanel'}
              class={
                'm-1 grid h-full w-full grid-cols-5 grid-rows-3 items-center justify-items-center'
              }
            >
              <Toggle
                size={2}
                sizeType={'rem'}
                color={'warning'}
                value={true}
              />
              <Toggle size={2} sizeType={'rem'} />
              <Toggle
                size={2}
                variant={'radio'}
                sizeType={'rem'}
                color={'accent'}
              />
              <Toggle
                size={2}
                variant={'checkbox'}
                sizeType={'rem'}
                color={'warning'}
                value={true}
              />
              <Toggle
                size={2}
                variant={'radio'}
                sizeType={'rem'}
                color={'accent'}
                value={true}
              />
              <Toggle size={2} sizeType={'rem'} color={'success'} />
              <Toggle
                size={2}
                variant={'checkbox'}
                sizeType={'rem'}
                color={'success'}
              />
              <Toggle
                size={2}
                variant={'checkbox'}
                sizeType={'rem'}
                color={'error'}
              />
              <Toggle size={2} sizeType={'rem'} color={'accent'} value={true} />
              <Toggle
                size={2}
                variant={'radio'}
                sizeType={'rem'}
                color={'warning'}
              />
              <Toggle
                size={2}
                variant={'radio'}
                sizeType={'rem'}
                color={'success'}
              />
              <Toggle size={2} sizeType={'rem'} color={'error'} value={true} />
              <Toggle
                size={2}
                variant={'checkbox'}
                sizeType={'rem'}
                value={true}
              />
              <Toggle
                size={2}
                variant={'radio'}
                sizeType={'rem'}
                color={'error'}
                value={true}
              />
              <Toggle size={2} variant={'checkbox'} sizeType={'rem'} />
            </div>
            <div
              q:slot={'secondPanel'}
              class={
                'grid h-full grid-rows-3 items-center justify-items-center p-5'
              }
            >
              <Input
                class={'h-fit w-full'}
                rounded={true}
                color={'success'}
                placeholder={'Input'}
              />
              <FileInput
                class={'h-fit  w-full'}
                variant={'solid'}
                placeholder={'File Input'}
              />
              <Select
                class={'h-fit w-full'}
                values={[
                  { option: 'first', group: true },
                  { option: 'first', group: false },
                  { option: 'second', group: false },
                  { option: 'third', group: false },
                  { option: 'second', group: true },
                  { option: 'first', group: false },
                  { option: 'second', group: false },
                  { option: 'third', group: false },
                  { option: 'third', group: true },
                  { option: 'first', group: false },
                  { option: 'second', group: false },
                  { option: 'third', group: false },
                ]}
                maxHeight={500}
                variant={'text'}
                color={'error'}
                placeholder={'Select Input'}
              />
            </div>
          </Divider>
        </div>
        <i
            style={{
              mask: 'url(/cc.svg)',
              maskSize: 'cover',
              width: '90vw',
              height: '50.6vw',
            }}
            class={'m-auto cc-icon-large cursor-pointer text-accent-0 col-span-1 lg:col-span-2'}
            onClick$={$(() => nav('/'))}
        />
        <h1 class={'p-4 col-span-1 lg:col-span-2'}>This project also uses <a class={'text-accent-0 underline'} href={'https://feathericons.com/'} >Feather Icons</a> made by <a class={'text-accent-0 underline'} href={'https://x.com/colebemis'} >@colebemis</a>, so make sure to check that out too.</h1>
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Corrosive Components',
      meta: [
        {
          name: 'description',
          content: 'Discover Corrosive Components, a powerful and flexible library of high-performance UI components built specifically for the Qwik framework. Enhance your web applications with our customizable and optimized components.',
        },
        {
          property: 'og:title',
          content: 'Corrosive Components - High-Performance UI Components for Qwik Framework',
        },
        {
          property: 'og:description',
          content: 'Enhance your Qwik-based web applications with Corrosive Components, a library offering customizable, high-performance UI components designed for seamless integration.',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: import.meta.env.PUBLIC_URL,
        },
        {
          property: 'og:image',
          content: `${import.meta.env.PUBLIC_URL}/public/corrosive.svg`,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'Corrosive Components - High-Performance UI Components for Qwik Framework',
        },
        {
          name: 'twitter:description',
          content: 'Corrosive Components is your go-to library for high-performance, customizable UI components built for the Qwik framework. Boost your web application development with our optimized components.',
        },
        {
          name: 'twitter:image',
          content: `${import.meta.env.PUBLIC_URL}/public/corrosive.svg`,
        },
      ],
  links: [
    {
      rel: 'canonical',
      href: import.meta.env.PUBLIC_URL,
    },
  ],
}
