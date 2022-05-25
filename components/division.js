import Image from 'next/image'
import DivisionItem from './division-item';
import tulisanDivision from '../public/images/tulisan-division.png'
import tulisanRRQ from '../public/images/tulisan-rrq.png'
import background1 from '../public/images/foto-miya.jpg'
import background2 from '../public/images/foto-bg-pubg.jpg'
import background3 from '../public/images/foto-bg-ff.jpg'
import background4 from '../public/images/foto-bg-valorant.jpg'
import background5 from '../public/images/foto-bg-fifa.jpg'
import background6 from '../public/images/foto-bg-wild-rift.jpg'
import background7 from '../public/images/foto-bg-sausage-man.jpg'
import logo1 from '../public/images/logo-mobile-legends.png'
import logo2 from '../public/images/logo-pubg.png'
import logo3 from '../public/images/logo-free-fire.png'
import logo4 from '../public/images/logo-valorant.png'
import logo5 from '../public/images/logo-fifa.png'
import logo6 from '../public/images/logo-wild-rift.png'
import logo7 from '../public/images/logo-sausage-man.png'

export default function Division({}) {
  return <div className='bg-gradient-to-tr from-init to-last'>
        <div className='relative h-16 flex items-center px-3'>
          <div className='absolute z-10'>
            <Image src={tulisanDivision} />
          </div>
          <div className='absolute z-0 left-20'>
            <Image src={tulisanRRQ} />
          </div>
        </div>
        <DivisionItem background={background1} logo={logo1} />
        <DivisionItem background={background2} logo={logo2} />
        <DivisionItem background={background3} logo={logo3} />
        <DivisionItem background={background4} logo={logo4} device='pc' />
        <DivisionItem background={background5} logo={logo5} device='console' />
        <DivisionItem background={background6} logo={logo6} />
        <DivisionItem background={background7} logo={logo7} />
      </div>;
}
  