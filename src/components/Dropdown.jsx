import React from 'react'
import { Link } from 'react-router-dom';

function Dropdown ({text, items} ) {
  const clickear = (e)=>{
    document.querySelector(".dropDown").classList.toggle("hidden")
    document.querySelector("body").classList.toggle("overflow-y-hidden")
    setTimeout(() => {
      document.querySelector(".dropDown").classList.toggle("h-0")
      document.querySelector(".dropDown").classList.toggle("h-screen")
    }, 100);

    let imgs = document.querySelectorAll(".toDown");
    imgs.forEach(element => {
      setTimeout(() => {
      element.classList.toggle("hidden")
      }, 600);
    });
    let as = document.querySelectorAll(".a");
    as.forEach(element => {
      setTimeout(() => {
        element.classList.toggle("hidden")
        element.classList.toggle("flex")
      }, 200);
    });
  }
  const listItems = items.map((item) => <li key={item.id} className={`flex m-1 rounded-l bg-no-repeat bg-cover w-full items-start justify-start toDown relative bg-${item.img} h-screen hidden `}><Link key={item.id}  className="h-full w-1/6 text-neutral-200  text-10xl text-center self-start items-center hidden a uppercase hover:text-neutral-700" to={"/itemList/" + item.categoria} onClick={clickear}>{item.categoria}</Link></li>);
  return (
    <>
        <button onClick={clickear} className="text-neutral-100 bg-neutral-700 hover:bg-yellow-500 hover:text-yellow-100 focus:outline-none  rounded-lg p-2  relative font-bold text-lg" type="button"> {text || "boton"}  </button>
        <div className='hidden z-10 bg-neutral-100 rounded divide-y divide-gray-100 shadow dropDown absolute w-full h-0 p-5 left-0 top-32 transition ease-in duration-200'>
            <ul className=" flex p-1 justify-between ">
              {
                listItems
              }
            </ul>
        </div>
    </>
  )
}

export default Dropdown