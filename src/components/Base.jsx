import React from 'react'
import Logo from "../logo.png"
import Navbar from './Navbar'
import {Outlet} from "react-router-dom" 
function Base() {
  return (
     <div className="antialiased raleWay">
      <header className='flex w-full justify-between bg-neutral-900 items-center'>
      <img src={Logo} alt="" className='object-contain  h-24 self-center ml-5' />
      <Navbar></Navbar>
      </header>
      
      <Outlet>
        
      </Outlet>
      <footer>

      </footer>
    </div>
   
    
  )
}

export default Base