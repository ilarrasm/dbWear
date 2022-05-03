import React from 'react'
import ItemCount from './ItemCount';

function ItemListContainer({items}) {
  return (
    <>{items || "Falta agregar productos"}
    <ItemCount stock={40} init={1} />
    </>
  )
}

export default ItemListContainer