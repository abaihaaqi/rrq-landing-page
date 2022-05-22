import { useState } from 'react'
import style from './navbar.module.css'
import { CaretDown, CaretUp } from 'phosphor-react'

export default function Submenu({children, title}) {
  const [childStatus, setChildStatus] = useState(false)

  return (
    <div className='flex flex-col'>
      <button className={style.listItem} onClick={() => setChildStatus(!childStatus)}>
        {title}
        {childStatus ? <CaretUp size={24} /> : <CaretDown size={24} />}
      </button>
      {childStatus && (
        <div className='relative '>
          <div className='flex flex-col border-l-8 border-primary'>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}