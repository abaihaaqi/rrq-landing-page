import style from './division-item-desktop.module.css'
import Image from 'next/image'
import { DeviceMobile } from 'phosphor-react'

export default function DivisionItemDesktop({ background, logo }) {
  return (
    <div className={style.itemContainer}>
      <div className='absolute inset-0 -right-20 skew-x-6 -ml-7'>
        <Image alt='' src={background} layout='fill' objectFit='cover' objectPosition='top right' />
      </div>
      <div className='absolute inset-0 skew-x-6 bg-black/60 -mx-7 flex flex-col items-center justify-between'>
        <div className='flex justify-end w-full pt-5 pr-6'>
          <div className='bg-last opacity-60 -skew-x-6 rounded-md p-1'>
            <DeviceMobile size={24} weight='thin' />
          </div>
        </div>
        <Image alt='' src={logo} />
        <button className={style.itemAction}>
          View Players
        </button>
      </div>
    </div>
  )
}
  