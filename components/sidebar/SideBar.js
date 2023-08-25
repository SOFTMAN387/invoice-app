import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const SideBar = () => {
  return (
    <>
  <div className='sidebar'>
    <div className='sidebar__container'>
          <Link href="/">
          <div className='sidebar__header'>
          <div className='sidebar_logo'>
                <h2>SoftMan</h2>
             </div>
       </div>
       </Link>
    <div className='sidebar__bottom'>
        <Image src="/images/prof-pic3.jpg" alt='er-manish-gupta' width="50" height="50"/>

    </div>
    </div>

  </div>





    </>
  )
}

export default SideBar