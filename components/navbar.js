import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './navbar.module.css'
import Submenu from './submenu'
import LogoRRQ from '../public/images/logo-rrq.png'
import { List, X ,FacebookLogo, InstagramLogo, YoutubeLogo, CaretDown } from 'phosphor-react'

export default function Navbar() {
  const [menuStatus, setMenuStatus] = useState(false)

  return (
    <>
      <div className='bg-white shadow-md p-3 md:py-0 md:px-8 sticky top-0 flex justify-between md:grid grid-cols-12 gap-4 border-b border-black border-opacity-30 z-50'>
        <Link href="/">
          <a className='flex items-center w-14 md:w-full'>
            <Image alt='' src={LogoRRQ} />
          </a>
        </Link>
        <button className='md:hidden' onClick={() => setMenuStatus(!menuStatus)}>
          {menuStatus ? <X size={40} /> : (
            <List size={40}/>
          )}
        </button>
        <div className='col-span-11 hidden md:flex flex-col justify-between'>
          <div className='my-2 flex items-center gap-4 px-3 pt-3'>
            <InstagramLogo size={24} />
            <YoutubeLogo size={24} />
            <FacebookLogo size={24} />
            <button className='bg-action rounded-md px-3 py-1 text-xs'>
              LOGIN MEMBERSHIP
            </button>
          </div>
          <div className='flex text-sm'>
            <div className={style.navItemContainer}>
              <button className={style.navItem}>
                DIVISIONS
                <span>
                  <CaretDown size={16} />
                </span>
              </button>
              <div className={style.navSubContainer}>
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
                <button className={style.listItem}>
                  RRQ STREAMER
                </button>
              </div>
            </div>
            <button className={style.navItem}>
              MATCH
            </button>
            <div className={style.navItemContainer}>
              <button className={style.navItem}>
                NEWS & MEDIA
                <span>
                  <CaretDown size={16} />
                </span>
              </button>
              <div className={style.navSubContainer}>
                <button className={style.listItem}>
                  NEWS
                </button>
                <button className={style.listItem}>
                  VIDEOS
                </button>
                <button className={style.listItem}>
                  GALLERY
                </button>
              </div>
            </div>
            <div className={style.navItemContainer}>
              <button className={style.navItem}>
                EVENT & COMMUNITY
                <span>
                  <CaretDown size={16} />
                </span>
              </button>
              <div className={style.navSubContainer}>
                <button className={style.listItem}>
                  RRQ MEMBERSHIP
                </button>
                <button className={style.listItem}>
                  RRQ ACADEMY
                </button>
                <button className={style.listItem}>
                  TOURNAMENT & SCRIM
                </button>
              </div>
            </div>
            <div className={style.navItemContainer}>
              <button className={style.navItem}>
                COMPANY
                <span>
                  <CaretDown size={16} />
                </span>
              </button>
              <div className={style.navSubContainer}>
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
              </div>
            </div>
            <button className={style.navItem}>
              STORE
            </button>
          </div>
        </div>
      </div>
      {menuStatus && (
        <div className='fixed z-50 flex flex-col md:hidden w-full bg-white max-h-screen overflow-scroll'>
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
            <button className={style.listItem}>
              RRQ STREAMER
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