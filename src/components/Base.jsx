import React from 'react'
import Logo from "../logo.png"
import Navbar from './Navbar'
import {Outlet} from "react-router-dom" 
import ItemListContainer from './ItemListContainer'

function Base() {
  return (
     <div className="antialiased raleWay bg-neutral-100" id='base'>
      <header className='flex w-full justify-between bg-neutral-900 items-center'>
      <img src={Logo} alt="" className='object-contain  h-12 m-5 sm:h-24 self-center ml-5' />
      <Navbar></Navbar>
      </header>
      
      <Outlet>
        
      </Outlet>
      <footer>
        <ItemListContainer limit={4}></ItemListContainer>
      </footer>
    </div>
   
    
  )
}

export default Base