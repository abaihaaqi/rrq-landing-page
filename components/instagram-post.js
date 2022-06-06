import Image from 'next/image'
import fotoIG1 from '../public/images/foto-ig-rrq-1.jpg'
import fotoIG2 from '../public/images/foto-ig-rrq-2.jpg'
import fotoIG3 from '../public/images/foto-ig-rrq-3.jpg'
import fotoIG4 from '../public/images/foto-ig-rrq-4.jpg'
import fotoIG5 from '../public/images/foto-ig-rrq-5.jpg'
import fotoIG6 from '../public/images/foto-ig-rrq-6.jpg'

export default function InstagramPost({ logoInstagram }) {
  return (
    <>
      <div className='hidden md:grid grid-cols-4 gap-2 items-center bg-white border border-black/40 m-2 md:mx-16 p-3 text-center'>
        <div>
          <Image alt='' src={logoInstagram} />
          <p className='text-red-800'>
            #REXREGUMQEON
          </p>
          <p className='text-sm mb-2'>
            Share your RRQ moment with us on Instagram!
          </p>
        </div>
        <Image alt='' src={fotoIG5} />
        <Image alt='' src={fotoIG6} />
        <div className='grid grid-cols-2 gap-2'>
          <Image alt='' src={fotoIG1} />
          <Image alt='' src={fotoIG2} />
          <Image alt='' src={fotoIG3} />
          <Image alt='' src={fotoIG4} />
        </div>
      </div>
      <div className='md:hidden bg-white border border-black/40 m-2 md:mx-16 p-3 text-center'>
        <Image alt='' src={logoInstagram} />
        <p className='text-red-800'>
          #REXREGUMQEON
        </p>
        <p className='text-sm mb-2'>
          Share your RRQ moment with us on Instagram!
        </p>
        <div className='grid grid-cols-2 gap-2'>
          <Image alt='' src={fotoIG1} />
          <Image alt='' src={fotoIG2} />
          <Image alt='' src={fotoIG3} />
          <Image alt='' src={fotoIG4} />
        </div>
      </div>
    </>
  )
}
  