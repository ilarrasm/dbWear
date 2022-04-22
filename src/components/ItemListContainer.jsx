import React from 'react'

function ItemListContainer({items}) {
  return (
    <p>{items || "Falta agregar productos"}</p>
  )
}

export default ItemListContainer