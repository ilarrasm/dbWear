import React from 'react'
import Item from './Item'
export default function ItemList({lista}){ 
  function img(image){
    // mostrar imagenes
    const imagenes = require.context("../media", true);
    let img
    if(image !== undefined && image){
      return img = imagenes(`./${image}`)
    }
  }
  return (
    
    
    <section className='grid grid-cols-4 p-5 fadeIn'>
      {
      lista.length > 0 ? (lista.map((list, index) =>(
        <Item key={index} id={list.id} nombre={list.nombre} descripcion={list.descripcion} precio={list.precio} img={img(list.imageId)}/>
      ))
      ) :(
        <h1> cargando ...</h1>
      )
      }  
    </section>
  
  )
}
