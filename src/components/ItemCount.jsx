import React, { useState, useEffect } from "react";
function ItemCount({stock, init, onAdd}) {
    const [contador, setContador] = useState(init)
    let cantidad = contador
    let guardar = () =>{
      onAdd(cantidad)
    }
    useEffect(() => {
        // aca es cuando el componente nace o (parecido al docuemnte.ready() de javascript)
      console.log('el componente esta listo')
      setContador(contador)
        
      return () => {
        console.log('El componente murio')
      }
      // estos corrchetes son las dependencias del useEffect que obligarian a volver a 
      // renderizar el componente
    }, [contador])
    function sumar() {
        contador < stock ? setContador(contador + 1) : alert("debe ser menor a cincuenta")
        
    }
  
  
    function restar() {
        contador > init ? setContador(contador - 1) : alert("no puede quedar el carrito vacio")
    }
    
  return (
    <div className="flex flex-col justify-center items-center m-5"> 
      <div className="flex">
        <button onClick={restar} className="px-5 py-2 rounded bg-neutral-700 text-neutral-200">restar 1</button>
        <span className="px-5 py-2 rounded bg-neutral-700 text-neutral-200 mx-5">contador es : {contador}</span>
        <button onClick={sumar} className="px-5 py-2 rounded bg-neutral-700 text-neutral-200">sumar 1</button>
      </div>
      
      <button onClick={guardar} className="my-5 px-5 py-2 bg-neutral-400 text-neutral-200 rounded">Enviar</button>
    </div>
  )
}

export default ItemCount