import Image from 'next/image'
import { Desktop, DeviceMobile, GameController } from 'phosphor-react'

export default function DivisionItem({ background, logo, device }) {
  function deviceIs() {
    if (device == 'pc') {
      return <Desktop size={24} weight='thin' />
    } else if (device == 'console') {
      return <GameController size={24} weight='thin' />
    } else {
      return <DeviceMobile size={24} weight='thin' />
    }
  }

  return (
    <div className='relative h-[200px]'>
      <Image alt='' src={background} layout='fill' objectFit='cover' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/0 flex flex-col justify-center text-white p-2'>
        <div className='flex justify-center'>
          <div className='w-1/3'>
            <Image alt='' src={logo} />
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='border border-last text-xs text-last px-2 py-1 rounded-sm'>
            View Players
          </button>
        </div>
      </div>
      <div className='absolute right-2 top-2 bg-last opacity-60 rounded-sm'>
        {deviceIs()}
      </div>
    </div>
  )
}
  