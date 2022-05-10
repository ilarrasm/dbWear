import React from 'react'
import { Link } from 'react-router-dom';

function Dropdown ({text, items} ) {
  const clickear = (e)=>{
    e.preventDefault()
    document.querySelector(".dropDown").classList.toggle("hidden")
  }
  const listItems = items.map((item) =>  <li className="p-2 rounded-lg hover:bg-slate-600"><Link className="p-5" to="/itemDetail">{item}</Link></li>);
  return (
    <>
        <button onClick={clickear} className="text-white bg-neutral-700 hover:bg-neutral-800 focus:outline-none  rounded-lg text-sm p-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative" type="button"> {text || "a"}  </button>
        <div className='hidden z-10 w-44 bg-neutral-700 rounded-lg divide-y divide-gray-100 shadow dropDown absolute top-35 mt-5 right-20 p-5'>
            <ul className="p-1 text-sm text-gray-700 dark:text-gray-200">
              {listItems}
            </ul>
        </div>
    </>
  )
}

export default Dropdown