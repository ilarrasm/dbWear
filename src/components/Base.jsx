import React from 'react'
import Logo from "../logo.png"
import Navbar from './Navbar'
import {Outlet} from "react-router-dom"
function Base() {
  return (
    <>
      <header className='flex w-full justify-between bg-neutral-600 items-center'>
      <img src={Logo} alt="" className='object-contain  h-24 self-center ml-5' />
      <Navbar></Navbar>
      
      </header>
      
      <Outlet></Outlet>
      <footer>

      </footer>
    </>
    
  )
}

export default Base