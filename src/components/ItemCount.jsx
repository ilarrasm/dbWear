import React, { useState, useEffect } from "react";
function ItemCount({stock, init, onAdd}) {
    const [contador, setContador] = useState(init)
    function enviar(){
      onAdd = contador
      return onAdd
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
    <div> 
    <button onClick={restar}>restar 1</button>
    <h1>contador es : {contador}</h1>
    <button onClick={sumar}>sumar 1</button>
    <button onClick={enviar}>Enviar</button>
    </div>
  )
}

export default ItemCount