import {React, useState, useEffect} from 'react'
import Item from './Item'
export default function ItemList() {
  const productos = [];
  class producto{
      constructor(id, nombre, descripcion, precio, img){
          this.id = id;
          this.nombre = nombre;
          this.descripcion = descripcion;
          this.precio = precio;
          this.img = img;
      }
  }

  let producto1 = new producto("0", "short", "este es el mejor short de todos", "99.99 dolares", "https://sweyle.com/wp-content/uploads/2018/05/3672-nectuy.jpg");
  let producto2 = new producto("1", "zapatillas", "las mas velocez", "555 euros", "https://www.envybodyshop.com/wp-content/uploads/2021/02/creeper-205-lvpu.jpg");
  let producto3 = new producto("2", "medias", "comodas y abrigadas", "4523,3 yuanes", "https://i.pinimg.com/736x/cb/f0/25/cbf025e14439da37f4785e71089c01d3.jpg")

  productos.push(producto1, producto2, producto3);
  console.log(productos)

  const [lista, setLista] = useState([]);
  

  useEffect(() => {
    let promesa = new Promise((resolve, reject) =>{
        resolve(true);
      });
    promesa.then(result =>{
        // productos.map(product => <Item nombre={product.nombre} descripcion={product.descripcion} precio={product.precio} />)
        result ? setLista(productos) : console.log( "hola", result)
    }, 
  err => {
      console.log(err);
  }).catch(err => {
    console.log(err);
    });
  }, [setLista]);


 
    return (
    <div>
        {lista.map(product => <Item id={product.id} nombre={product.nombre} descripcion={product.descripcion} precio={product.precio} img={product.img}/>)}
    </div>
  )
}
