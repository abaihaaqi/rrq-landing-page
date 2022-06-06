import Image from 'next/image'
import DivisionItem from './division-item';
import DivisionItemDesktop from './division-item-desktop';
import tulisanDivision from '../public/images/tulisan-division.png'
import tulisanDivisionLG from '../public/images/tulisan-division-lg.png'
import tulisanRRQ from '../public/images/tulisan-rrq.png'
import tulisanRexRegumQeon from '../public/images/tulisan-rex-regum-qeon.png'
import fotoMiyaPotrait from '../public/images/foto-miya-potrait.jpg'
import fotoMiya from '../public/images/foto-miya.jpg'
import bgPUBG from '../public/images/foto-bg-pubg.jpg'
import bgPUBGPotrait from '../public/images/foto-bg-pubg-potrait.jpg'
import bgFF from '../public/images/foto-bg-ff.jpg'
import bgFFPotrait from '../public/images/foto-bg-ff-potrait.jpg'
import bgValorant from '../public/images/foto-bg-valorant.jpg'
import bgValorantPotrait from '../public/images/foto-bg-valorant-potrait.jpg'
import bgFIFA from '../public/images/foto-bg-fifa.jpg'
import bgFIFAPotrait from '../public/images/foto-bg-fifa-potrait.jpg'
import bgWildRift from '../public/images/foto-bg-wild-rift.jpg'
import bgWildRiftPotrait from '../public/images/foto-bg-wild-rift-potrait.jpg'
import bgSausageMan from '../public/images/foto-bg-sausage-man.jpg'
import bgSausageManPotrait from '../public/images/foto-bg-sausage-man-potrait.jpg'
import logoML from '../public/images/logo-mobile-legends.png'
import logoPUBG from '../public/images/logo-pubg.png'
import logoFF from '../public/images/logo-free-fire.png'
import logoValorant from '../public/images/logo-valorant.png'
import logoFIFA from '../public/images/logo-fifa.png'
import logoWildRift from '../public/images/logo-wild-rift.png'
import logoSausageMan from '../public/images/logo-sausage-man.png'

export default function Division({}) {
  return (
    <>
      <div className='md:hidden bg-gradient-to-tr from-init to-last'>
        <div className='relative h-16 flex items-center px-3'>
          <div className='absolute z-10'>
            <Image alt='' src={tulisanDivision} />
          </div>
          <div className='absolute z-0 left-20'>
            <Image alt='' src={tulisanRRQ} />
          </div>
        </div>
        <DivisionItem background={fotoMiya} logo={logoML} />
        <DivisionItem background={bgPUBG} logo={logoPUBG} />
        <DivisionItem background={bgFF} logo={logoFF} />
        <DivisionItem background={bgValorant} logo={logoValorant} device='pc' />
        <DivisionItem background={bgFIFA} logo={logoFIFA} device='console' />
        <DivisionItem background={bgWildRift} logo={logoWildRift} />
        <DivisionItem background={bgSausageMan} logo={logoSausageMan} />
      </div>
      <div className='hidden md:block bg-gradient-to-tr from-init to-last overflow-scroll'>
        <div className='relative h-32 hidden md:flex items-center px-8'>
          <div className='absolute z-10'>
            <Image alt='' src={tulisanDivisionLG} />
          </div>
          <div className='absolute z-0 left-48'>
            <Image alt='' src={tulisanRexRegumQeon} />
          </div>
        </div>
        <div className='grid grid-cols-7 w-max mx-16'>
          <DivisionItemDesktop background={fotoMiyaPotrait} logo={logoML} />
          <DivisionItemDesktop background={bgPUBGPotrait} logo={logoPUBG} />
          <DivisionItemDesktop background={bgFFPotrait} logo={logoFF} />
          <DivisionItemDesktop background={bgValorantPotrait} logo={logoValorant} />
          <DivisionItemDesktop background={bgFIFAPotrait} logo={logoFIFA} />
          <DivisionItemDesktop background={bgWildRiftPotrait} logo={logoWildRift} />
          <DivisionItemDesktop background={bgSausageManPotrait} logo={logoSausageMan} />
        </div>
        <p className='text-center py-2'>
          <code className='bg-black text-white px-1 rounded'>Shift</code> + <code className='bg-black text-white px-1 rounded'>Scroll</code> to scroll horizontally
        </p>
      </div>
    </>
  )
}
  