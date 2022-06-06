import Image from 'next/image'

export default function ResultItem({ logoGame, logoDefender, logoAttacker, match, defender, attacker, phase, win, defenderPoint, attackerPoint }) {
  return (
    <div className='grid grid-cols-12 border-b border-black/40 h-[76px] bg-slate-50'>
      <div className='bg-slate-200 flex justify-center items-center border-r-2 border-secondary'>
        <Image alt='' src={logoGame} />
      </div>
      <div className='col-span-7 flex flex-col justify-center py-2 pl-1'>
        <h3 className='font-medium truncate'>{match}</h3>
        <div className='truncate text-sm flex gap-1'>
          <span className='w-4'>
            <Image alt='' src={logoDefender} />
          </span>
          <span>
            {defender}
          </span>
          <span className='font-light'>
            VS
          </span>
          <span className='w-4'>
            <Image alt='' src={logoAttacker} />
          </span>
          <span className='truncate'>
            {attacker}
          </span>
        </div>
      </div>
      <div className='text-right col-span-4 flex flex-col justify-center pr-2'>
        <div className='truncate text-sm'>
          {phase}
        </div>
        <div className='text-sm'>
          <span className='font-bold'>{win ? 'Win' : 'Lose'}</span> {defenderPoint} : {attackerPoint}
        </div>
      </div>
    </div>
  )
}
  