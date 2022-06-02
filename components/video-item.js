import Image from 'next/image'
import { Triangle } from 'phosphor-react'

export default function VideoItem({ thumbnail, title }) {
  return (
    <div className='relative h-[280px]'>
      <Image alt='' src={thumbnail} layout='fill' objectFit='cover' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0 flex items-end text-white p-2'>
        <div className='flex items-center'>
          <div className='bg-primary rotate-90 rounded-sm p-1'>
            <Triangle size={16} color='black' />
          </div>
          <p className='font-bold pl-2'>
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}
  