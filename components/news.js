import VideoItem from './video-item'
import NewsItem from './news-item'
import newsImage1 from '../public/images/foto-rrq-1.jpg'
import newsImage2 from '../public/images/foto-rrq-2.jpg'
import newsImage3 from '../public/images/foto-rrq-3.jpg'
import thumbnail1 from '../public/images/foto-rrq-4.jpg'
import thumbnail2 from '../public/images/foto-rrq-5.jpg'

export default function News({}) {
  return (
    <>
      <div className='z-0 bg-gradient-to-br from-init to-last md:hidden flex flex-col gap-[2px] p-[2px]'>
        <NewsItem newsImage={newsImage1} division='FREE FIRE' date='MAY 20, 2022' title='Perkuat Tim Garuda, RRQ Kazu Sumbang Emas untuk Indonesia' />
        <NewsItem newsImage={newsImage2} division='LOL: Wild Rift' date='MAY 17, 2022' title='Amankan Peringkat Ketiga, RRQ Wild RIft Tampil di Play-Ins Icons 2022' />
        <NewsItem newsImage={newsImage3} division='MOBILE LEGENDS' date='MAY 09, 2022' title='Tampil Ganas di Play-off, RRQ Akira Juara MPL BR Season 2' />
        <VideoItem thumbnail={thumbnail1} title='INSTING BINATANG RRQ AETHER #shorts #rrq #mobilelegends' />
        <VideoItem thumbnail={thumbnail2} title='RRQ X ZILLIQA : Revolution of Fan Engagement' />
      </div>
      <div className='z-0 bg-gradient-to-br from-init to-last hidden md:flex flex-row gap-[2px] p-[2px]'>
        <div className='w-7/12 grid grid-cols-2 gap-[2px]'>
          <div className='col-span-2'>
            <NewsItem containerClassName='relative h-[420px]' newsImage={newsImage1} division='FREE FIRE' date='MAY 20, 2022' title='Perkuat Tim Garuda, RRQ Kazu Sumbang Emas untuk Indonesia' />
          </div>
          <VideoItem containerClassName='relative h-[230px]' thumbnail={thumbnail1} title='INSTING BINATANG RRQ AETHER #shorts #rrq #mobilelegends' />
          <VideoItem containerClassName='relative h-[230px]' thumbnail={thumbnail2} title='RRQ X ZILLIQA : Revolution of Fan Engagement' />
        </div>
        <div className='w-5/12 flex flex-col gap-[2px]'>
          <NewsItem containerClassName='relative h-[325px]' newsImage={newsImage2} division='LOL: Wild Rift' date='MAY 17, 2022' title='Amankan Peringkat Ketiga, RRQ Wild RIft Tampil di Play-Ins Icons 2022' />
          <NewsItem containerClassName='relative h-[325px]' newsImage={newsImage3} division='MOBILE LEGENDS' date='MAY 09, 2022' title='Tampil Ganas di Play-off, RRQ Akira Juara MPL BR Season 2' />
        </div>
      </div>
    </>
  )
}
  