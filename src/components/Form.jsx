import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GlobalCartContext } from '../context/CartContext';
import useFirebase from '../hooks/useFirebase';
import Modal from './Modal';



export const Form = () => {
  const { carrito, finalPrice, clear } = useContext(GlobalCartContext);
  const [Paises, SetPaises] = useState([]);
  const [error, setError] = useState();
  const { fetchGenerateTicket } = useFirebase();
  const setearError = (e) => {
    e.preventDefault()
    setError(undefined)
  }
  useEffect(() => {
    const array = []
    fetch("https://restcountries.com/v3.1/region/europe")
      .then(response => response.json())
      .then(data => data.map((c) => {

        array.push(c.name.common)
        if (array.length > 0) {
         return SetPaises(array)
        }
      }
      ));


    return () => {
    }
  }, []);



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
    const { buyer: { name,
      phone,
      email,
      address,
      country,
      code } } = Formulario

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
  }


  const enviar = (e) => {

    e.preventDefault()
    let val = validator()
    if (val) {
      fetchGenerateTicket({ datos: Formulario })
      setError(false)

    } else {
      setError(true)

    }


  }






  return (
    <form className='grid  grid-cols-1 sm:grid-cols-2  items-center bg-neutral-100 rounded w-full text-neutral-800' >
      <h2 className='flex w-full col-span-2 text-5xl p-5 text-neutral-900 font-light justify-center italic'>Formulario de compra</h2>
      {
        Object.keys(buyer).map((dato, index) => (
          dato === "country" ? (
            <div key={index} className="flex flex-col m-5 py-2 px-5 justify-between rounded ">
              <label className="mb-2 " htmlFor="country">{dato}</label>
              <select name="country" id="country" className="py-2 px-1 rounded " onChange={cambiar}>
                <option disabled selected>Seleccione su País</option>
                {

                  Paises.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                  ))

                }
              </select>
            </div>) : (

            <div key={index} className="flex flex-col m-5 py-2 px-5 justify-between rounded col-span-2 sm:col-span-1">

              <label className="mb-2 " htmlFor={[dato]}>{[dato]}</label>

              <input id={[dato]} name={[dato]} className="py-2 px-1 rounded " type="text" placeholder={[dato]} onChange={cambiar} />

            </div>)))
      }
      <button className={"flex text-xl text-neutral-600 p-5 m-5 justify-self-center self-end rounded  col-span-2 hover:bg-neutral-600 hover:text-neutral-200"} onClick={enviar}>Comprar</button>
      {
        error !== undefined ? <Modal val={error} err={setearError} suc={clear}></Modal> : ""
      }
    </form>
  )
}








