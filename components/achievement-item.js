import Image from 'next/image'
import trophy1 from '../public/images/trophy-1.png'
import trophy2 from '../public/images/trophy-2.png'
import trophy3 from '../public/images/trophy-3.png'

export default function AchievementItem({ logoGame, logoTournament, tournament, year, team, position }) {
  function positionIs() {
    if (position == 1) {
      return (
        <div className='col-span-2 flex flex-col items-center justify-center'>
          <div className='flex'>
            <Image alt='' src={trophy1} />
          </div>
          <p className='text-sm truncate'>
            1st Place
          </p>
        </div>
      )
    } else if (position == 2) {
      return (
        <div className='col-span-2 flex flex-col items-center justify-center'>
          <div className='flex'>
            <Image alt='' src={trophy2} />
          </div>
          <p className='text-sm truncate'>
            2nd Place
          </p>
        </div>
      )
    } else {
      return (
        <div className='col-span-2 flex flex-col items-center justify-center'>
          <div className='flex'>
            <Image alt='' src={trophy3} />
          </div>
          <p className='text-sm truncate'>
            3rd Place
          </p>
        </div>
      )
    }
  }

  return (
    <div className='grid grid-cols-12 border-b border-black/40 h-[76px] bg-slate-50'>
      <div className='bg-slate-200 flex justify-center items-center border-r-2 border-secondary'>
        <Image alt='' src={logoGame} />
      </div>
      <div className='col-span-2 flex justify-center items-center px-2'>
        <Image alt='' src={logoTournament} />
      </div>
      <div className='col-span-7 flex flex-col justify-center'>
        <h3 className='font-medium truncate'>{tournament}</h3>
        <p className='text-sm truncate'>{year} - {team}</p>
      </div>
      {positionIs()}
    </div>
  )
}
  