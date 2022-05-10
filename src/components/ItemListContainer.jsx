import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList"
function ItemListContainer() {

  const [productos, setProductos] = useState([]);


  const data = [
    {
      descripcion: "este es el mejor short de todos",

      id: "0",

      img: "https://i.pinimg.com/originals/20/8f/05/208f05b84e20a18ec741a3209502caa6.jpg",

      nombre: "Short",

      precio: "99.99 €"
    },
    {

      descripcion: "este es el mejor short de todos",

      id: "1",

      img: "https://www.envybodyshop.com/wp-content/uploads/2021/02/creeper-205-lvpu.jpg",

      nombre: "Zapatillas",

      precio: "993.99 €"
    },
    {

      descripcion: "este es el mejor short de todos",

      id: "2",

      img: "https://i.pinimg.com/736x/cb/f0/25/cbf025e14439da37f4785e71089c01d3.jpg",

      nombre: "Medias",

      precio: "9.99 €"
    }
    
  ];


  



  useEffect(() => {
    
    let promesa = new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve(data);
        console.log(data);
      }, 800);
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
    <ItemList lista={productos} />
    </>
  )
}

export default ItemListContainer