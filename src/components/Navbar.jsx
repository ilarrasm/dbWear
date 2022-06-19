import React from 'react'
import { NavLink } from 'react-router-dom';
import CartIcon from './CartIcon';
import Database from "../DB/Database"
import { RiMenuFill } from "react-icons/ri";
function Navbar() {
  //logica
  console.log(Database.categorias);
  let stylo = {
    nav: 'flex sm:p-5 w-full ',
    ul: 'flex flex-row sm:m-5 justify-between w-full sm:justify-end items-center sm:text-lg font-semibold text-xl ',
    li: 'sm:mr-5 sm:p-2',
    link: 'text-neutral-400 hover:text-neutral-200  p-2',
    active: 'text-neutral-200',
    res: 'text-neutral-400 sm:hidden hover:text-neutral-200  p-2'
  }
  
  const toggle = () => {
    const menu = document.getElementById("menu")
    menu.classList.toggle("hidden")
    menu.classList.toggle("flex")
  }
  const hamburguer = <button className={stylo.res} onClick={toggle}  > <RiMenuFill></RiMenuFill> </button>
  return (
    <nav className={stylo.nav}>
      <ul className={stylo.ul}>
        <li key={0} className={stylo.li}><NavLink className={({ isActive }) => (isActive ? stylo.active : stylo.link)} to="/"  >Home</NavLink></li>

        <li className='hidden flex-col justify-between items-center text-5xl absolute top-20 left-0 py-5 bg-neutral-900 w-full h-96 mr-5 p-2 sm:flex sm:flex-row sm:text-lg sm:w-auto sm:h-auto sm:static' id='menu'>
          {Database.categorias.map((categoria) => (
            <li key={categoria.id + 1} className=''  >
              <NavLink className={stylo.link} to={`itemList/${categoria.categoria}`} onClick={hamburguer ?? toggle}>
                {categoria.categoria}
              </NavLink>
            </li>
          ))}
        </li>


        <li key={4} className={stylo.li}><CartIcon /></li>
        <li key={5} className={stylo.li}>{hamburguer}</li>
      </ul>

    </nav>
  )
}

export default Navbar


