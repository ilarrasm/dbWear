import React, { useState, useEffect } from "react";
function ItemCount({cantidad}) {
    const [contador, setContador] = useState(0)

    //console.log("Componente se inicio")

    useEffect(() => {
        // aca es cuando el componente nace o (parecido al docuemnte.ready() de javascript)
      console.log('el componente esta listo')
      setContador(cantidad)
        
      return () => {
        console.log('El componente murio')
      }
      // estos corrchetes son las dependencias del useEffect que obligarian a volver a 
      // renderizar el componente
    }, [cantidad])
    function sumar(params) {
        contador < 50 ? setContador(contador + 1) : alert("debe ser menor a cincuenta")
        
    }
  
  
    function restar(params) {
        contador > 1 ? setContador(contador - 1) : alert("no puede quedar el carrito vacio")
    }
  return (
    <div> 
    <button onClick={restar}>restar 1</button>
    <h1>contador es : {contador}</h1>
    <button onClick={sumar}>sumar 1</button>
    </div>
  )
}

export default ItemCount