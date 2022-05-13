import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList"
import Database from '../DB/Database';
function ItemListContainer() {

  const [Lista, setLista] = useState([]);
  const {productos} = Database;

  useEffect(() => {
    
    let promesa = new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve(productos);
      }, 800);
      });
    promesa.then((result) =>{
        setLista(result)
        console.log(result);
    }).catch(err => {
    console.log(err);
    });
  
    return () => {
      
    }
  }, [])
  

  

  return (
    <>
    <ItemList lista={Lista} />
    </>
  )
}

export default ItemListContainer