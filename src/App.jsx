import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/home/Home'
import all_product from './assets/all_product'
import Footer from './components/Footer/Footer'


function App() {

  const [favoutite, setfavoutite] = useState()
  
  
  const [searchTerm, setsearchTerm] = useState()
  const [list, setlist] = useState(all_product)
   const setsearch = (value) => {
  const newList = all_product.filter((elem) =>
    elem.name.toLowerCase().includes(value.toLowerCase()) // case-insensitive
  );

  console.log(newList, value);
  setlist(newList);
};

  const openFav =()=>{
    setlist(all_product.filter((elem)=> elem.wishlist===true))
  }

  const openHome =()=>{
    setlist(all_product)
  }
  // console.log(list)

  return (
    <>
      <Navbar searchTerm={searchTerm} setsearch={setsearch} openHome={openHome} setsearchTerm={setsearchTerm} openFav={openFav} favoutite={favoutite} setfavoutite={setfavoutite}/>
      <Home searchTerm={searchTerm} list={list}/>
      <Footer/>
    </>
  )
}

export default App
