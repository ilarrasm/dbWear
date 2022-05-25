import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Item({id, nombre, descripcion, precio, img}) {

  
  
  
  
  
    return (
    <div key={id} className='flex flex-col m-5 w-72 h-full rounded overflow-hidden text-neutral-700'>
        
        <img src={img} alt=""  className='h-40  object-cover'/>
        <h4 className='text-neutral-700 text-2xl my-2 capitalize'>{nombre}</h4>
        <span className='self-end m-1'>{precio} &euro;</span>
        <p className='text-md'>{descripcion}</p>
        <NavLink className='rounded px-5 py-1 mt-5 border-2 bg-neutral-700 hover:bg-yellow-500 border-neutral-700 hover:border-yellow-500 transition-all ease-in-out duration-150 text-amber-50 self-end font-semibold text-lg' to={"/itemDetail/"+id}>Ir al producto</NavLink>
        
    </div>
  )
}
