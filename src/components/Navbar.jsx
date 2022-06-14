import React from 'react'
import { NavLink } from 'react-router-dom';
import CartIcon from './CartIcon';
import Database from "../DB/Database"
function Navbar() {
  //logica
  console.log(Database.categorias);
  let stylo = {
    nav: 'flex p-5',
    ul: 'flex flex-row m-5 justify-end items-center text-lg font-semibold text-xl ',
    li: 'mr-5 p-2',
    link: 'text-neutral-400 hover:text-neutral-200  p-2',
    active: 'text-neutral-200'
  }
  return (
    <nav className={stylo.nav}>
      <ul className={stylo.ul}>
        <li key={0} className={stylo.li}><NavLink  className={({ isActive }) => (isActive ? stylo.active : stylo.link)} to="/" >Home</NavLink></li>

        {Database.categorias.map((categoria) => (
          <li key={categoria.id + 1} className='mr-5 p-2' >
            <NavLink  className={stylo.link} to={`itemList/${categoria.categoria}` } >
              {categoria.categoria}
            </NavLink>
          </li>
        ))}
        <li key={4} className={stylo.li}><NavLink className={stylo.link} to="/card">About Us</NavLink></li>
        <li key={5} className={stylo.li}><CartIcon /></li>
      </ul>

    </nav>
  )
}

export default Navbar


