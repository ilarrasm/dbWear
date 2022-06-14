import React from 'react'
import Item from './Item'
export default function ItemList({lista , limit}){ 
  console.log(lista);
  console.log(limit);
  function img(image){
    // mostrar imagenes
    const imagenes = require.context("../media", true);
    let img
    if(image !== undefined && image){
      return img = imagenes(`./${image}`)
    }
  }
  let listaCopy = lista.filter((doc, index) => index < limit )
  console.log(listaCopy);
  return (
    
    
    <section className='grid grid-cols-4 p-5 gap-x-5 mx-10'>
      <h2 className='text-3xl p-5 text-neutral-500 col-span-4'> { listaCopy.length > 0 ? "Recomendados para vos":"Nuestros Productos" }</h2>
      {
        
      lista.length > 0 && !limit  ? (lista.map((list, index) =>(
        <Item key={index} id={list.id} nombre={list.nombre} descripcion={list.descripcion} precio={list.precio} img={img(list.imageId)}/>
      ))
      ): listaCopy.length > 0 && limit ? (listaCopy.map((list, index) =>(
        <Item key={index} id={list.id} nombre={list.nombre} descripcion={list.descripcion} precio={list.precio} img={img(list.imageId)}/>
      ))):"Cargando ..."
      
      
      }
    </section>
  
  )
}
//<h2 className='text-neutral-500'> Holadadasasda</h2>
//listCopty.length > 0 ? "Recomendados para vos": 