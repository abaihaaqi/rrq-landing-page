import InstagramPost from '../components/instagram-post';
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
import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';

export default function Home() {
  return (
    <div className='bg-slate-300'>
      <Navbar />
      <News />
      <Division />
      <ResultAchievement />
      <InstagramPost logoInstagram={logoInstagram} />
      <div className='bg-white border border-black/40 m-2 md:mx-16 p-3 text-center'>
        <p>
          Partners
        </p>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
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
        </div>
        <div>
          <Image alt='' src={logoZilliqa} />
        </div>
      </div>
      <div className='bg-zinc-800 px-10 py-3 text-xs text-white grid grid-cols-1 md:grid-cols-5'>
        <div className='md:flex md:justify-end md:pr-6'>
          <Image alt='' src={logoRRQ} layout='fixed' />
        </div>
        <div className='col-span-2 grid grid-cols-2 md:grid-cols-3'>
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
          <div>
            <h3 className='font-bold'>FOLLOW US</h3>
            <div className='my-2 flex gap-4'>
              <InstagramLogo size={24} />
              <YoutubeLogo size={24} />
              <FacebookLogo size={24} />
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
  