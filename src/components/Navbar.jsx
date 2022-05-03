import React from 'react'
import CartIcon from './CartIcon';
function Navbar({elements}) {
  //logica
  const element = elements.map((item) =>  <li className='mr-5'><a className='text-slate-300 hover:text-slate-400 p-2' href="./index.html">{item}</a></li>);
  return (
    <div className="bg-slate-700 p-5">
        <ul className='flex flex-row m-5 justify-end items-center'>
          {element}
          <li key={element} className='mr-5'><a className='text-slate-300 hover:text-slate-400 p-2' href="./index.html"><CartIcon /></a></li>
        </ul>
        
    </div>
  )
}

export default Navbar