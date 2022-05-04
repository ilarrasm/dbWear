import React from 'react'

export default function Item({id, nombre, descripcion, precio, img}) {

  
  
  
  
  
    return (
    <div>
        <span>{id}</span>
        <h4>{nombre}</h4>
        <img src={img} alt="" />
        <p>{descripcion}</p>
        <span>{precio}</span>
    </div>
  )
}
