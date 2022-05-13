import React from 'react'
import { Link } from 'react-router-dom';

function Dropdown ({text, items} ) {
  const clickear = (e)=>{
    e.preventDefault()
    document.querySelector(".dropDown").classList.toggle("hidden")
    setTimeout(() => {
      document.querySelector(".dropDown").classList.toggle("h-0")
      document.querySelector(".dropDown").classList.toggle("h-2/4")
    }, 100);

    let imgs = document.querySelectorAll(".toDown");
    imgs.forEach(element => {
      setTimeout(() => {
      element.classList.toggle("h-0")
      element.classList.toggle("h-96")
      }, 200);
    });
    let as = document.querySelectorAll(".a");
    as.forEach(element => {
      setTimeout(() => {
        element.classList.toggle("hidden")
      }, 200);
      
    });

  }
  const listItems = items.map((item) => <li key={item.id} className={`flex h-0 m-5 rounded-l bg-no-repeat bg-cover w-full items-center justify-center toDown relative bg-${item.img} h-0`}><Link className="p-5 text-neutral-100 bg-neutral-900 text-xl  text-center self-center items-center z-50 hidden a" to={"/itemList/" + item.categoria}>{item.categoria}</Link></li>);
  return (
    <>
        <button onClick={clickear} className="text-neutral-100 bg-neutral-700 hover:bg-yellow-500 hover:text-yellow-100 focus:outline-none  rounded-lg text-sm p-2  relative" type="button"> {text || "boton"}  </button>
        <div className='hidden z-10 bg-neutral-100 rounded divide-y divide-gray-100 shadow dropDown absolute w-full h-0 p-5 left-0 top-32 transition ease-in duration-200'>
            <ul className="h-10 flex p-1 text-sm text-gray-700  justify-between ">
              {listItems}
            </ul>
        </div>
    </>
  )
}

export default Dropdown