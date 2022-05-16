import {BrowserRouter, Routes, Route}  from "react-router-dom"
import Card from "../views/Cart"
import Home from "../views/Home"
import ItemDetail from "../views/ItemDetail"
import ItemList from "../views/ItemList"
import Base from "../components/Base"
function Rutas() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Base/>}>
              <Route index element={<Home/>}/>
              <Route path="/cart" element={<Card/>}/>
              <Route path="/itemList" element={<ItemList />}></Route>
              <Route path="/itemList/:categoria" element={<ItemList />}></Route>
              <Route path="/itemDetail/:id" element={<ItemDetail />}></Route>
            </Route>
            
        </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default Rutas