import React from 'react'
import {NavLink } from 'react-router-dom';
import CartIcon from './CartIcon';
import Dropdown from './Dropdown';
import Database from "../DB/Database"
function Navbar() {
  //logica
  return (
    <navbar className="flex p-5">
        <ul className='flex flex-row m-5 justify-end items-center'>
          <li key={1} className='mr-5 p-2'><NavLink className='text-neutral-300 hover:text-neutral-400 p-2' to="/">Home</NavLink></li>
          <li key={2} className='mr-5 p-2'><Dropdown items={Database.categorias} text={"Categorias"}/></li>
          <li key={3} className='mr-5 p-2'><NavLink className='text-neutral-300 hover:text-neutral-400 p-2' to="/card">About Us</NavLink></li>
          <li key={4} className='mr-5 p-2'><CartIcon /></li>
        </ul>
        
    </navbar>
  )
}

export default Navbar


//