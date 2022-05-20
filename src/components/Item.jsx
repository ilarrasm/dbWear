import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Item({id, nombre, descripcion, precio, img}) {

  
  
  
  
  
    return (
    <div key={id} className='flex flex-col m-5 w-72 h-full rounded overflow-hidden'>
        
        <img src={img} alt=""  className='h-40  object-cover'/>
        <h4 className='text-neutral-700 text-2xl my-2'>{nombre}</h4>
        <span className='self-end m-1'>{precio}</span>
        <p className='text-md'>{descripcion}</p>
        <button className='rounded px-5 py-1 mt-5 hover:bg-yellow-300 transition-all ease-in-out duration-150 bg-yellow-400 text-neutral-700 self-end'><NavLink to={"/itemDetail/"+id}> Seguir</NavLink></button>
        
    </div>
  )
}
