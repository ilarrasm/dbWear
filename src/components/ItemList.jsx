import React from 'react'
import Item from './Item'

export default function ItemList({lista}){ 



  return (
    <section className='flex p-5 justify-between fadeIn'>
      {
      lista.length > 0 ? (lista.map((list, index) =>(
        <Item key={index} id={list.id} nombre={list.nombre} descripcion={list.descripcion} precio={list.precio} img={list.img}/>
      ))
      ) :(
        <h1> cargando ...</h1>
      )
      }
    </section>
  )
}
