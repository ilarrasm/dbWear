import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import Database from '../DB/Database';
import {useParams} from "react-router-dom"
function ItemList() {
  
  const {productos} = Database
  const envio = productos
  const params = useParams()
  console.log(params);
  const filtro = productos.filter((producto) => producto.categoria === params.categoria)
  console.log(filtro);
  return (
    <div>
        <ItemListContainer list={envio}>
        </ItemListContainer>
    </div>
  )
}

export default ItemList