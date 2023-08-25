import React from 'react'
import SideBar from '../sidebar/SideBar'
const Layout = (props) => {
  return (
   <>
   <SideBar />
   <div>{props.children}</div>
   </>
  )
}

export default Layout