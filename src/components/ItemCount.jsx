import React, { useState, useEffect } from "react";

function ItemCount({ stock, init, onAdd }) {
  const [contador, setContador] = useState(init);
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
  const opt = []
  let num = (arr) => {
    for (let i = init; i <= stock; i++) {
      arr.push({ value: i, label: i })
    }
    return arr
  }
  num(opt)
  let cambio = (e) => {
    console.log(parseInt(e.target.value));
    setContador(parseInt(e.target.value));
  }
  onAdd(contador)
  return (
    <div className="flex justify-center items-center m-5">
      <div className="flex">
        <div className="flex text-neutral-600  m-5  justify-between w-full">
          <span className="mr-5">Stock:</span>
          <strong>{stock}</strong>
        </div>
      </div>
      <div className="flex items-center text-neutral-100 bg-neutral-600 px-5 py-2 rounded w-full ">
      <label htmlFor="cant" className="mr-5">Cantidad</label>
        <select name="cantidad" id="cant" onChange={cambio} className={`w-full rounded text-neutral-600 border border-neutral-600 focus:border-yellow-100`} >
          {opt.map((cant) => (
            <option key={cant.value} value={cant.value} >{cant.value}</option>
          ))}
        </select>
      </div>

    </div>
  )
}

export default ItemCount

//className="p-5 border-b-4 border-b-neutral-300"
//bg-[url('/img/hero-pattern.svg')]