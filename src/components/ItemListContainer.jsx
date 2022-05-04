import React from 'react'
import ItemCount from './ItemCount';
import ItemList from "./ItemList"
function ItemListContainer({items}) {
  return (
    <>{items || "Falta agregar productos"}
    <ItemCount stock={40} init={1} />
    <ItemList/>
    </>
  )
}

export default ItemListContainer