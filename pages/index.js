import ResultAchievement from '../components/result-achievement';
import Division from '../components/division';
import News from '../components/news';
import Navbar from '../components/navbar'
import Image from 'next/image'
import logoInstagram from '../public/images/logo-instagram.png'
import logoRRQ from '../public/images/logo-rrq.png'
import logoROG from '../public/images/logo-ROG.png'
import logoBiznet from '../public/images/logo-biznet.png'
import logoAyana from '../public/images/logo-ayana.png'
import logoPopMie from '../public/images/logo-pop-mie.png'
import logoSukro from '../public/images/logo-sukro.png'
import logoXXI from '../public/images/logo-XXI.png'
import logoXiaomi from '../public/images/logo-xiaomi.png'
import logoHaus from '../public/images/logo-haus.png'
import logoZilliqa from '../public/images/logo-zilliqa.png'
import fotoIG1 from '../public/images/foto-ig-rrq-1.jpg'
import fotoIG2 from '../public/images/foto-ig-rrq-2.jpg'
import fotoIG3 from '../public/images/foto-ig-rrq-3.jpg'
import fotoIG4 from '../public/images/foto-ig-rrq-4.jpg'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';

export default function Home() {
  return (
    <div className='bg-slate-300'>
      <Navbar />
      <News />
      <Division />
      <ResultAchievement />
      <div className='bg-white border border-black/40 m-2 p-3 text-center'>
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
      <div className='bg-white border border-black/40 m-2 p-3 text-center flex flex-col justify-center gap-4'>
        <p>
          Partners
        </p>
        <div>
          <Image alt='' src={logoROG} />
        </div>
        <div>
          <Image alt='' src={logoBiznet} />
        </div>
        <div>
          <Image alt='' src={logoAyana} />
        </div>
        <div>
          <Image alt='' src={logoPopMie} />
        </div>
        <div>
          <Image alt='' src={logoSukro} />
        </div>
        <div>
          <Image alt='' src={logoXXI} />
        </div>
        <div>
          <Image alt='' src={logoXiaomi} />
        </div>
        <div>
          <Image alt='' src={logoHaus} />
        </div>
        <div>
          <Image alt='' src={logoZilliqa} />
        </div>
      </div>
      <div className='bg-zinc-800 px-10 py-3 text-xs text-white'>
        <Image alt='' src={logoRRQ} />
        <div className='grid grid-cols-2'>
          <div>
            <h3 className='text-sm font-bold'>REX REGUM QEON</h3>
            <div className='flex flex-col gap-2 my-2 text-white/70'>
              <p>
                About
              </p>
              <p>
                Match
              </p>
              <p>
                News
              </p>
              <p>
                Videos
              </p>
              <p>
                Shop
              </p>
              <p>
                Media Center
              </p>
              <p>
                Partners
              </p>
              <p>
                Brand Ambassador
              </p>
              <p>
                Membership
              </p>
              <p>
                RRQ Academy
              </p>
              <p>
                Career
              </p>
              <p>
                Contact
              </p>
            </div>
            <h3 className='font-bold'>FOLLOW US</h3>
            <div className='my-2 flex gap-4'>
              <InstagramLogo size={24} />
              <YoutubeLogo size={24} />
              <FacebookLogo size={24} />
            </div>
          </div>
          <div>
            <h3 className='text-sm font-bold'>DIVISIONS</h3>
            <div className='flex flex-col gap-2 my-2 text-white/70'>
              <p>
                Mobile Legends
              </p>
              <p>
                PUBG Mobile
              </p>
              <p>
                FREE FIRE
              </p>
              <p>
                VALORANT
              </p>
              <p>
                FIFA
              </p>
              <p>
                LoL: Wild Rift
              </p>
              <p>
                Sausage Man
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-zinc-900 text-center text-white/30 py-4'>
        2022 - <a className='hover:text-white transition-all' href="http://teamrrq.com" target="_blank" rel="noopener noreferrer">RRQ Landing Page</a> Clone, by <a className='hover:text-white transition-all' href="http://nizarbaihaqi.com" target="_blank" rel="noopener noreferrer">Ijay Baihaqi</a>
      </div>
    </div>
  )
}
  