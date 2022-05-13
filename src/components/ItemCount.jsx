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
    <div className="flex flex-col justify-center items-center"> 
      <button onClick={restar}>restar 1</button>
      <span>contador es : {contador}</span>
      <button onClick={sumar}>sumar 1</button>
      <button onClick={guardar}>Enviar</button>
    </div>
  )
}

export default ItemCount