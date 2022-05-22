import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './navbar.module.css'
import Submenu from './submenu'
import LogoRRQ from '../public/images/logo-rrq.png'
import { List, X } from 'phosphor-react'

export default function Navbar() {
  const [menuStatus, setMenuStatus] = useState(false)

  return (
    <>
      <div className='p-3 sticky top-0 flex justify-between items-center border-b border-black border-opacity-30'>
        <Link href="/">
          <a className='block w-14'>
            <Image src={LogoRRQ} layout='responsive' />
          </a>
        </Link>
        <button onClick={() => setMenuStatus(!menuStatus)}>
          {menuStatus ? <X size={40} /> : (
            <List size={40}/>
          )}
        </button>
      </div>
      {menuStatus && (
        <div className='absolute flex flex-col w-full bg-white'>
          <Submenu title='DIVISION'>
            <button className={style.listItem}>
              MOBILE LEGEND
            </button>
            <button className={style.listItem}>
              PUBG MOBILE
            </button>
            <button className={style.listItem}>
              FREE FIRE
            </button>
            <button className={style.listItem}>
              VALORANT
            </button>
            <button className={style.listItem}>
              FIFA
            </button>
            <button className={style.listItem}>
              LOL: WILD RIFT
            </button>
            <button className={style.listItem}>
              SAUSAGE MAN
            </button>
            <button className={style.listItem}>
              BRAND AMBASSADOR
            </button>
          </Submenu>
          <button className={style.listItem}>
            MATCH
          </button>
          <Submenu title='NEWS & MEDIA'>
            <button className={style.listItem}>
              NEWS
            </button>
            <button className={style.listItem}>
              VIDEOS
            </button>
            <button className={style.listItem}>
              GALLERY
            </button>
          </Submenu>
          <Submenu title='EVENT & COMMUNITY'>
            <button className={style.listItem}>
              RRQ MEMBERSHIP
            </button>
            <button className={style.listItem}>
              RRQ ACADEMY
            </button>
            <button className={style.listItem}>
              TOURNAMENT & SCRIM
            </button>
          </Submenu>
          <Submenu title='COMPANY'>
            <button className={style.listItem}>
              ABOUT
            </button>
            <button className={style.listItem}>
              PARTNER
            </button>
            <button className={style.listItem}>
              CONTACT
            </button>
            <button className={style.listItem}>
              CAREER
            </button>
          </Submenu>
          <button className={style.listItem}>
            STORE
          </button>
          <div className='px-4 py-3'>
            <button className='bg-action rounded-md px-3 py-1'>
              LOGIN MEMBERSHIP
            </button>
          </div>
        </div>
      )}
    </>
  )
}