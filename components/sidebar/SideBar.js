import React from 'react'
import Image from 'next/image'
const SideBar = () => {
  return (
    <>
  <div className='sidebar'>
    <div className='sidebar__container'>
        <div className='sidebar__header'>
            <div className='sidebar_logo'>
                <h2>SoftMan</h2>
             </div>
       </div>
    <div className='sidebar__bottom'>
        <Image src="/avg.png" alt='er-manish-gupta' width="50" height="50"/>

    </div>
    </div>

  </div>





    </>
  )
}

export default SideBar