import Image from 'next/image'

export default function NewsItem({ newsImage, division, date, title, containerClassName }) {
  return (
    <div className={containerClassName || 'relative h-[280px]'}>
      <Image alt='' src={newsImage} layout='fill' objectFit='cover' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0 flex flex-col justify-end text-white p-2'>
        <small className='text-xs'>
          <span className='text-primary'>{division}</span> - {date}
        </small>
        <p className='font-bold'>
          {title}
        </p>
      </div>
    </div>
  )
}
  