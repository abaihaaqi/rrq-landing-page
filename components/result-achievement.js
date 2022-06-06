import ResultItem from '../components/result-item';
import AchievementItem from '../components/achievement-item'
import logoValorantMini from '../public/images/logo-valorant-mini.png'
import logoMobileLegends from '../public/images/logo-mobile-legends.png'
import logoRRQ from '../public/images/logo-rrq.png'
import logoOasis from '../public/images/logo-oasis-mini.png'
import logoGeekFamSmall from '../public/images/logo-geek-fam-small.png'
import logoKingsSmall from '../public/images/logo-kings-small.png'
import logoAlphaSmall from '../public/images/logo-alpha-small.png'
import logoIndonesia from '../public/images/logo-indonesia.png'
import logoPhilipines from '../public/images/logo-philipines.png'
import logoSeaGames from '../public/images/logo-sea-games.png'
import logoSMID from '../public/images/logo-smid.png'
import logoSausageMan from '../public/images/logo-sausage-man.png'
import logoMetaco from '../public/images/logo-metaco.png'
import logoFreeFireMini from '../public/images/logo-free-fire-mini.png'

export default function ResultAchievement({}) {
  return (
    <div className='bg-white border border-black/40 m-2 p-3 md:flex gap-4'>
      <div>
        <div className='font-rubik text-lg grid grid-cols-2'>
          <button className='border-b border-secondary'>
            Results
          </button>
          <button className='text-black/30 border-b border-black/40'>
            Upcoming
          </button>
        </div>
        <ResultItem logoGame={logoValorantMini} logoDefender={logoRRQ} logoAttacker={logoOasis} match='VCT PH 2022 Stage 2' defender='RRQ Valorant' attacker='Oasis Gaming' phase='Group Stage Week 1 - Match 7' win defenderPoint={2} attackerPoint={0} />
        <ResultItem logoGame={logoMobileLegends} match='DGWIB MLBB S10' phase='Group Stage' logoDefender={logoRRQ} defender='RRQ Sena' defenderPoint={1} win logoAttacker={logoGeekFamSmall} attacker='GEEK FAM' attackerPoint={0} />
        <ResultItem logoGame={logoMobileLegends} match='DGWIB MLBB S10' phase='Group Stage' logoDefender={logoRRQ} defender='RRQ Sena' defenderPoint={0} logoAttacker={logoKingsSmall} attacker='Kings' attackerPoint={1} />
        <ResultItem logoGame={logoValorantMini} match='VCT PH 2022 Stage 2' phase='Group Stage' logoDefender={logoRRQ} defender='RRQ Valorant' defenderPoint={2} win logoAttacker={logoAlphaSmall} attacker='Alpha Esport Pro' attackerPoint={0} />
        <ResultItem logoGame={logoMobileLegends} match='SEA Games 31th - Hanoi 2021' phase='GRAND FINAL' logoDefender={logoIndonesia} defender='Indonesia' defenderPoint={1} logoAttacker={logoPhilipines} attacker='Philipines' attackerPoint={3} />
        <div className='flex justify-center'>
          <button className='font-rubik text-primary py-2 px-3'>
            SEE ALL
          </button>
        </div>
      </div>
      <div>
        <h3 className='font-rubik text-lg border-b border-black/40'>Achievements</h3>
        <AchievementItem logoGame={logoMobileLegends} logoTournament={logoSeaGames} tournament='SEA Games 31th - Hanoi 2021' year={2022} team='Indonesia' position={2} />
        <AchievementItem logoGame={logoSausageMan} logoTournament={logoSMID} tournament='SMID Community Tournament' year={2022} team='RRQ Axe' position={3} />
        <AchievementItem logoGame={logoSausageMan} logoTournament={logoSausageMan} tournament='Tournamet Reborn RV' year={2022} team='RRQ Axe' position={3} />
        <AchievementItem logoGame={logoFreeFireMini} logoTournament={logoSeaGames} tournament='SEA Games 31th - Hanoi 2021' year={2022} team='RRQ Kazu (Indonesia 1)' position={1} />
        <AchievementItem logoGame={logoSausageMan} logoTournament={logoMetaco} tournament='Metaco Online Tournament' year={2022} team='RRQ Axe' position={1} />
        <div className='flex justify-center'>
          <button className='font-rubik text-primary py-2 px-3'>
            SEE ALL
          </button>
        </div>
      </div>
    </div>
  )
}
  