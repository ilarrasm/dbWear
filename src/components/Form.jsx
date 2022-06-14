import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GlobalCartContext } from '../context/CartContext';
import useFirebase from '../hooks/useFirebase';
export const Form = () => {
  const { carrito, finalPrice } = useContext(GlobalCartContext)
  const [Paises, SetPaises] = useState([]);
  useEffect(() => {
    const array = []
    fetch("https://restcountries.com/v3.1/region/europe")
      .then(response => response.json())
      .then(data => data.map((c) => {

        array.push(c.name.common)
        if (array.length > 0) {
          SetPaises(array)
        }
      }
      ));


    return () => {
    }
  }, [])
  const [Formulario, SetFormulario] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
      address: "",
      country: "",
      code: ""

    },
    items: [...carrito],
    date: "hoy date",
    total: finalPrice(carrito)

  });
  const { buyer } = Formulario;
  const validator = () => {

    let regExp = {
      email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
      phone: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
      name: /^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/gim

    }
    const {buyer:{ name,
      phone,
      email,
      address,
      country,
      code }} = Formulario
    
    console.log(name);
    let pruebaName = regExp.name.test(name)
    let pruebaEmail = regExp.email.test(email)
    let pruebaPhone = regExp.phone.test(phone)
    if (pruebaName && pruebaEmail && pruebaPhone && country && code && address) {
      return true
    } else {
      return false
    }
  }

  const cambiar = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    SetFormulario({
      ...Formulario, buyer: {
        ...Formulario.buyer, [name]: value,
      },
    });
    console.log(Formulario);
  }




  Object.keys(buyer).map((dato, index) => {
    console.log(dato);
  })


  const { fetchGenerateTicket } = useFirebase()
  let modal
  function enviar(e) {
    e.preventDefault()
    if (validator()) {
      fetchGenerateTicket({ datos: Formulario })
    }else{
      return modal = false
    }

  }
  return (
    <form className='grid  grid-cols-2  items-center bg-neutral-100 rounded w-full text-neutral-800'>
      <h2 className='flex w-full col-span-2 text-5xl p-5 text-neutral-900 font-light justify-center italic'>Formulario de compra</h2>
      {Object.keys(buyer).map((dato, index) => (
        dato === "country" ? (
          <div key={index} className="flex flex-col m-5 py-2 px-5 justify-between rounded ">
            <label className="mb-2 " htmlFor="country">{dato}</label>
            <select name="country" id="country" className="py-2 px-1 rounded " onChange={cambiar}>
              <option disabled selected>Seleccione su País</option>
              {

                (Paises.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                )))
              }
            </select>
          </div>
        ) :
          <div key={index} className="flex flex-col m-5 py-2 px-5 justify-between rounded ">
            <label className="mb-2 " htmlFor={[dato]}>{[dato]}</label>
            <input id={[dato]} name={[dato]} className="py-2 px-1 rounded " type="text" placeholder={[dato]} onChange={cambiar} />
          </div>

      )
      )}

      <button className='flex justify-center col-span-2 text-neutral-200 p-3 border border-neutral-200 m-10' type="submit" onClick={enviar} >Comprar</button>
      <button className='flex justify-center col-span-2 text-neutral-200 p-3 border border-neutral-200 m-10' onClick={validator} >validar</button>
      {
        !modal ? <p>no se pudo</p>:<span>holanda</span>
      }
    </form>
  )
}
//////// { buyer: { name, phone, email }, items: [{ id, title, price }], date, total  }

// date es la fecha que se llevó adelante la compra
// total es la suma de los productos comprados




