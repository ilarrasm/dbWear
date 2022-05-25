import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import Database from '../DB/Database';
import {useParams} from "react-router-dom"
function ItemList() {
  
  const {productos} = Database;
  const envio = productos;
  const params = useParams();
  const filtro = productos.filter((producto) => producto.categoria === params.categoria);


  return (
    <>
        <ItemListContainer list={filtro.length === 0 ? envio : filtro}>
        </ItemListContainer>
    </>
  )
}

export default ItemList