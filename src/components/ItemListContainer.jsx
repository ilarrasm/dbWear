import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount';
import ItemList from "./ItemList"
function ItemListContainer() {

  const [productos, setProductos] = useState([]);


  const data = [
    {
      descripcion: "este es el mejor short de todos",

      id: "0",

      img: "https://sweyle.com/wp-content/uploads/2018/05/3672-nectuy.jpg",

      nombre: "short",

      precio: "99.99 dolares"
    },
    {

      descripcion: "este es el mejor short de todos",

      id: "1",

      img: "https://www.envybodyshop.com/wp-content/uploads/2021/02/creeper-205-lvpu.jpg",

      nombre: "zapatillas",

      precio: "993.99 dolares"
    },
    {

      descripcion: "este es el mejor short de todos",

      id: "2",

      img: "https://i.pinimg.com/736x/cb/f0/25/cbf025e14439da37f4785e71089c01d3.jpg",

      nombre: "medias",

      precio: "9.99 dolares"
    }
    
  ];


  



  useEffect(() => {
    
    let promesa = new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve(data);
        console.log(data);
      }, 2000);
      });
    promesa.then((result) =>{
        setProductos(result)
        console.log(result);
    }).catch(err => {
    console.log(err);
    });
  
    return () => {
      
    }
  }, [])
  

  

  return (
    <>
    <ItemCount stock={40} init={1} />
    <ItemList lista={productos} />
    </>
  )
}

export default ItemListContainer