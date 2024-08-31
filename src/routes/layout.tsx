import {
  $,
  component$,
  Slot,
  useSignal,
  useStore,
  useStyles$,
  useVisibleTask$,
} from '@builder.io/qwik'
import { routeLoader$, useNavigate } from '@builder.io/qwik-city'
import type { RequestHandler } from '@builder.io/qwik-city'
import {
  Button,
  DefaultResources,
  DefaultStyle,
} from '../../../corrosive-components'
import { Overlay } from '~/components/overlay'
import { Slider } from '~/components/slider'
import { Input } from '~/components/input'
import {CodeBlock} from "~/components/site-components/code-block";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  })
}

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  }
})

export default component$(() => {
  const nav = useNavigate()

  useStyles$(DefaultResources)
  useStyles$(DefaultStyle)

  const settingDefault = useStore(['', '', '', '', '', '', '', 0.1, 0.1])
  const settingOverwrite = useStore(['', '', '', '', '', '', '', 0.1, 0.1])
  const setting = useStore(['', '', '', '', '', '', '', 0.1, 0.1])
  const isDarkMode = useSignal<boolean>(false)
  const isBlueMode = useSignal<boolean>(false)

  const isInSetting = useSignal<boolean>(false)
  const isInDonations = useSignal<boolean>(false)
  const isInInfo = useSignal<boolean>(false)

  const setSetting = $(() => {
    function darkenColor(color: string | number, percentage: number) {
      let hex = color as string

      if (hex.startsWith('#')) {
        hex = hex.slice(1)
      }

      // Parse the hex color to get the RGB values
      let r = parseInt(hex.slice(0, 2), 16)
      let g = parseInt(hex.slice(2, 4), 16)
      let b = parseInt(hex.slice(4, 6), 16)

      let factor = percentage / 100

      if (percentage > 0) {
        factor *= -1

        r = 255 - r
        g = 255 - b
        b = 255 - b

        r = Math.floor(r * (1 + factor))
        g = Math.floor(g * (1 + factor))
        b = Math.floor(b * (1 + factor))

        // Ensure the values stay within the range [0, 255]
        r = Math.min(255, Math.max(0, r))
        g = Math.min(255, Math.max(0, g))
        b = Math.min(255, Math.max(0, b))

        r = 255 - r
        g = 255 - g
        b = 255 - b
      } else {
        r = Math.floor(r * (1 + factor))
        g = Math.floor(g * (1 + factor))
        b = Math.floor(b * (1 + factor))

        // Ensure the values stay within the range [0, 255]
        r = Math.min(255, Math.max(0, r))
        g = Math.min(255, Math.max(0, g))
        b = Math.min(255, Math.max(0, b))
      }

      // Convert the RGB values back to hex
      const adjustedHex = `#${r.toString(16).padStart(2, '0')}${g
        .toString(16)
        .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`

      return adjustedHex
    }

    document.documentElement.style.setProperty(
      `--primary-0`,
      settingOverwrite[0] as string
    )
    document.documentElement.style.setProperty(
      `--primary-1`,
      darkenColor(settingOverwrite[0], isDarkMode.value ? -10 : 10)
    )
    document.documentElement.style.setProperty(
      `--primary-2`,
      darkenColor(settingOverwrite[0], isDarkMode.value ? -20 : 20)
    )

    document.documentElement.style.setProperty(
      `--secondary-0`,
      settingOverwrite[1] as string
    )
    document.documentElement.style.setProperty(
      `--secondary-1`,
      darkenColor(settingOverwrite[1], isDarkMode.value ? 10 : -10)
    )
    document.documentElement.style.setProperty(
      `--secondary-2`,
      darkenColor(settingOverwrite[1], isDarkMode.value ? 20 : -20)
    )

    document.documentElement.style.setProperty(
      `--tertiary-0`,
      settingOverwrite[2] as string
    )
    document.documentElement.style.setProperty(
      `--tertiary-1`,
      darkenColor(settingOverwrite[2], isDarkMode.value ? 10 : -10)
    )
    document.documentElement.style.setProperty(
      `--tertiary-2`,
      darkenColor(settingOverwrite[2], isDarkMode.value ? -10 : 10)
    )

    document.documentElement.style.setProperty(
      `--accent-0`,
      settingOverwrite[3] as string
    )
    document.documentElement.style.setProperty(
      `--accent-1`,
      darkenColor(settingOverwrite[3], -50)
    )
    document.documentElement.style.setProperty(
      `--accent-2`,
      darkenColor(settingOverwrite[3], -80)
    )

    document.documentElement.style.setProperty(
      `--success-0`,
      settingOverwrite[4] as string
    )
    document.documentElement.style.setProperty(
      `--success-1`,
      darkenColor(settingOverwrite[4], -50)
    )
    document.documentElement.style.setProperty(
      `--success-2`,
      darkenColor(settingOverwrite[4], -80)
    )

    document.documentElement.style.setProperty(
      `--error-0`,
      settingOverwrite[5] as string
    )
    document.documentElement.style.setProperty(
      `--error-1`,
      darkenColor(settingOverwrite[5], -50)
    )
    document.documentElement.style.setProperty(
      `--error-2`,
      darkenColor(settingOverwrite[5], -80)
    )

    document.documentElement.style.setProperty(
      `--warning-0`,
      settingOverwrite[6] as string
    )
    document.documentElement.style.setProperty(
      `--warning-1`,
      darkenColor(settingOverwrite[6], -50)
    )
    document.documentElement.style.setProperty(
      `--warning-2`,
      darkenColor(settingOverwrite[6], -80)
    )

    document.documentElement.style.setProperty(
      `--width`,
      `${settingOverwrite[7]}rem`
    )
    document.documentElement.style.setProperty(
      `--corner`,
      `${settingOverwrite[8]}rem`
    )
  })

  const saveSetting = $(() => {
    for (let i = 0; i < 9; i++) {
      setting[i] = settingOverwrite[i]
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode.value))
    localStorage.setItem('blueMode', JSON.stringify(isBlueMode.value))
    localStorage.setItem('setting', JSON.stringify(setting))
  })

  const changeSetting = $(() => {
    isInSetting.value = !isInSetting.value
  })

  const changeAccent = $(async () => {
    isBlueMode.value = !isBlueMode.value

    if (isBlueMode.value) {
      settingOverwrite[3] = '#005cd0'
    } else {
      settingOverwrite[3] = '#ff6a00'
    }
    await setSetting()
    saveSetting()
  })

  const changeDarkMode = $(async () => {
    isDarkMode.value = !isDarkMode.value

    const color = settingOverwrite[0]
    settingOverwrite[0] = settingOverwrite[1]
    settingOverwrite[1] = color

    await setSetting()
    saveSetting()
  })

  const reset = $(() => {
    isDarkMode.value = false
    isBlueMode.value = false
    for (let i = 0; i < 9; i++) {
      settingOverwrite[i] = settingDefault[i]
      setting[i] = settingDefault[i]
    }
    localStorage.removeItem('setting')
    localStorage.removeItem('darkMode')
    localStorage.removeItem('blueMode')
    setSetting()
  })

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    function extractNumber(value: string): number {
      const match = value.match(/^(\d+(\.\d+)?)([a-zA-Z%]*)$/)
      if (match) {
        return parseFloat(match[1])
      }
      return 0.1
    }

    isDarkMode.value = localStorage.getItem('darkMode') == 'true'

    isBlueMode.value = localStorage.getItem('blueMode') == 'true'

    const rootElement = document.documentElement

    const rootStyles = getComputedStyle(rootElement)

    settingDefault[0] = rootStyles.getPropertyValue(`--primary-0`)
    settingDefault[1] = rootStyles.getPropertyValue(`--secondary-0`)
    settingDefault[2] = rootStyles.getPropertyValue(`--tertiary-0`)
    settingDefault[3] = rootStyles.getPropertyValue(`--accent-0`)
    settingDefault[4] = rootStyles.getPropertyValue(`--success-0`)
    settingDefault[5] = rootStyles.getPropertyValue(`--error-0`)
    settingDefault[6] = rootStyles.getPropertyValue(`--warning-0`)
    settingDefault[7] = extractNumber(rootStyles.getPropertyValue(`--width`))
    settingDefault[8] = extractNumber(rootStyles.getPropertyValue(`--corner`))

    const data = localStorage.getItem('setting')
    if (data) {
      const s: string[] = JSON.parse(data)
      for (let i = 0; i < 7; i++) {
        setting[i] = s[i]
      }
      setting[7] = parseFloat(s[7])
      setting[8] = parseFloat(s[8])
    } else {
      for (let i = 0; i < 9; i++) {
        setting[i] = settingDefault[i]
      }
    }

    for (let i = 0; i < 9; i++) {
      settingOverwrite[i] = setting[i]
    }

    if (
      localStorage.getItem('darkMode') == null &&
      window.matchMedia('(prefers-color-scheme: dark)').matches !=
        isDarkMode.value
    ) {
      await changeDarkMode()
    }

    setSetting()
  })

  return (
    <>
      <main>
        <Overlay open={isInSetting.value} closeOnClick={false}>
          <div
            class={
              'card relative m-auto flex w-3/5 flex-wrap justify-between gap-2 self-center rounded-corner border-width border-primary-0 bg-secondary-0 p-5 align-middle'
            }
          >
            <Input
              class={'grow'}
              type={'color'}
              placeholder={'Primary'}
              value={settingOverwrite[0]}
              onChange={$((value) => {
                settingOverwrite[0] = value as string
                setSetting()
              })}
            />
            <div class={'block basis-full sm:hidden'} />
            <Input
              class={'grow'}
              type={'color'}
              placeholder={'Secondary'}
              value={settingOverwrite[1]}
              onChange={$((value) => {
                settingOverwrite[1] = value as string
                setSetting()
              })}
            />
            <div class={'block basis-full md:hidden'} />
            <Input
              class={'grow'}
              type={'color'}
              placeholder={'Tertiary'}
              value={settingOverwrite[2]}
              onChange={$((value) => {
                settingOverwrite[2] = value as string
                setSetting()
              })}
            />
            <div class={'basis-full'} />
            <Input
              class={'grow'}
              type={'color'}
              placeholder={'Accent'}
              color={'accent'}
              value={settingOverwrite[3]}
              onChange={$((value) => {
                settingOverwrite[3] = value as string
                setSetting()
              })}
            />
            <div class={'block basis-full sm:hidden'} />
            <Input
              class={'grow'}
              type={'color'}
              placeholder={'Success'}
              color={'success'}
              value={settingOverwrite[4]}
              onChange={$((value) => {
                settingOverwrite[4] = value as string
                setSetting()
              })}
            />
            <div class={'block basis-full md:hidden'} />
            <Input
              class={'grow'}
              type={'color'}
              placeholder={'Error'}
              color={'error'}
              value={settingOverwrite[5]}
              onChange={$((value) => {
                settingOverwrite[5] = value as string
                setSetting()
              })}
            />
            <div class={'block basis-full sm:hidden'} />
            <Input
              class={'grow'}
              type={'color'}
              placeholder={'Warning'}
              color={'warning'}
              value={settingOverwrite[6]}
              onChange={$((value) => {
                settingOverwrite[6] = value as string
                setSetting()
              })}
            />
            <div class={'grid basis-full grid-cols-1'}>
              <label>Width</label>
              <Slider
                floatingValues={'alwaysShow'}
                min={0.01}
                max={0.25}
                defaultMax={
                  typeof settingOverwrite[7] == 'number'
                    ? settingOverwrite[7]
                    : 0.01
                }
                defaultMin={0.01}
                tolerance={0.01}
                onChange={$((_, max) => {
                  settingOverwrite[7] = max as number
                  setSetting()
                })}
              />
              <label>Corners</label>
              <Slider
                floatingValues={'alwaysShow'}
                min={0}
                max={15}
                defaultMax={
                  typeof settingOverwrite[8] == 'number'
                    ? settingOverwrite[8]
                    : 0
                }
                tolerance={0.5}
                onChange={$((_, max) => {
                  settingOverwrite[8] = max as number
                  setSetting()
                })}
              />
            </div>
            <Button
              class={'grow'}
              onClick={$(() => {
                saveSetting()
                isInSetting.value = false
              })}
            >
              <p class={'p-1'}>Save</p>
            </Button>
            <Button
              class={'grow'}
              onClick={$(() => {
                isInSetting.value = false
                for (let i = 0; i < 9; i++) {
                  settingOverwrite[i] = setting[i]
                }
                setSetting()
              })}
            >
              <p class={'p-1'}>Cancel</p>
            </Button>
          </div>
        </Overlay>
        <Overlay open={isInDonations.value} closeOnClick={false}>
          <div
              class={
                'card relative m-auto flex flex-row-reverse w-3/5 flex-wrap justify-between gap-2 self-center rounded-corner border-width border-primary-0 bg-secondary-0 p-5 align-middle'
              }
          >
            <Button class={'w-fit h-fit'} variant={'text'} onClick={$(()=> isInDonations.value = false)}>
              <i
                  class={'cc-icon-large cc-cross'}
              />
            </Button>
            <div class={'flex flex-col place-content-center items-center basis-full text-xl'}>
              <h1>You can help to support the project by donating to the wallet below.</h1>
              <h1>Thanks for supporting the project (and me).</h1>
            </div>
            <CodeBlock code={'0x453fBFff7e9C1c91AfF0f1Cf018a764BaffccB28'} language={''}/>
            <div class={'flex flex-col place-content-center items-center basis-full text-xl'}>
              <h1>This project also uses <a class={'text-accent-0 underline'} href={'https://feathericons.com/'} >Feather Icons</a> made by <a class={'text-accent-0 underline'} href={'https://x.com/colebemis'} >@colebemis</a>, so make sure to check that out too.</h1>
            </div>
          </div>
        </Overlay>
        <Overlay open={isInInfo.value} closeOnClick={false}>
          <div
              class={
                'card relative m-auto flex flex-row-reverse w-fit flex-wrap justify-between gap-2 self-center rounded-corner border-width border-primary-0 bg-secondary-0 p-5 align-middle'
              }
          >
            <Button class={'w-fit h-fit'} variant={'text'} onClick={$(()=> isInInfo.value = false)}>
              <i
                  class={'cc-icon-large cc-cross'}
              />
            </Button>
            <div class={'flex flex-col place-content-center items-center basis-full'}>
              <h1>This project is made and maintained by Mahdi Movahedian Atar</h1>
              <h1><a class={'text-accent-0 underline'} href={'https://github.com/Mahdi-Movahedian-Atar/corrosive-components'} >Github</a></h1>
              <h1><a class={'text-accent-0 underline'} href={'https://x.com/MovahedianAtar'} >Twitter</a></h1>
              <h1><a class={'text-accent-0 underline'} href={'https://www.linkedin.com/in/mahdi-movahedian-atar-54854626a/'} >Linked in</a></h1>
              <h1>movahedianatarmahdi@gmail.com</h1>
            </div>
          </div>
        </Overlay>
        {/*=============================================================Buttons============================================*/}
        <div
          class={
            'fixed z-[9999] flex h-14 w-full items-center gap-2 rounded-b-corner bg-primary-0 p-2'
          }
        >
          <i
            style={{
              mask: 'url(/corrosive.svg)',
              maskSize: 'cover',
              width: '2.5rem',
              height: '2.5rem',
            }}
            class={'cc-icon-large h-40 w-40 cursor-pointer text-accent-0'}
            onClick$={$(() => nav('/'))}
          />
          <Button
            class={'h-fit'}
            color={'accent'}
            onClick={$(() => nav('/docs/installation/installation'))}
          >
            <div class={'flex justify-center p-1'}>
              <p class={'sm:block hidden'}>Docs{' '}</p>
              <i
                style={{
                  mask: 'url(/icons/file-text.svg)',
                  maskSize: 'cover',
                }}
                class={'cc-icon-medium'}
              />
            </div>
          </Button>
          <Button
              class={'h-fit'}
              color={'accent'}
              onClick={$(() => isInDonations.value = true)}
          >
            <div class={'flex justify-center p-1'}>
              <p class={'sm:block hidden'}>Donations{'  '}</p>
              <i
                  style={{
                    mask: 'url(/icons/heart.svg)',
                    maskSize: 'cover',
                  }}
                  class={'cc-icon-medium'}
              />
            </div>
          </Button>
          <Button
              class={'h-fit'}
              color={'accent'}
              onClick={$(() => isInInfo.value = true)}
          >
            <div class={'flex justify-center p-1'}>
              <p class={'sm:block hidden'}> Contact{'  '}</p>
              <i
                  style={{
                    mask: 'url(/icons/info.svg)',
                    maskSize: 'cover',
                  }}
                  class={'cc-icon-medium'}
              />
            </div>
          </Button>
          <div class={'flex-grow'} />
          {/*===================================styling==========================*/}
          <Button onClick={reset} class={'h-fit'} variant={'text'}>
            <i
              style={{
                mask: 'url(/icons/reset.svg)',
                maskSize: 'cover',
              }}
              class={'cc-icon-large text-secondary-0'}
            />
          </Button>
          <Button onClick={changeSetting} class={'h-fit'} variant={'text'}>
            <i
              style={{
                mask: 'url(/icons/file-text.svg)',
                maskSize: 'cover',
              }}
              class={'cc-icon-large text-secondary-0'}
            />
          </Button>
          <Button onClick={changeAccent} class={'h-fit'} variant={'text'}>
            <i
              style={{
                color: isBlueMode.value ? '#ff6a00' : '#0074ff',
              }}
              class={'cc-icon-large rounded-full'}
            />
          </Button>
          <Button onClick={changeDarkMode} class={'h-fit'} variant={'text'}>
            <i
              style={{
                mask: isDarkMode.value
                  ? 'url(/icons/sun.svg)'
                  : 'url(/icons/moon.svg)',
                maskSize: 'cover',
              }}
              class={'cc-icon-large text-secondary-0'}
            />
          </Button>
        </div>
        <div class={'flex h-14 w-full'}></div>
        <Slot />
      </main>
    </>
  )
})
