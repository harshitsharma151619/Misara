import React, { useState } from 'react'
import Cards from '../cards/Cards';
import all_product from '../../assets/all_product';


function Home({searchTerm, list}) {
    
    

  return (
    <>
    <div id='tasklist' className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 p-5'> 
        {list.map((elem)=>{
            return(
                <Cards name={elem.name} img={elem.img} discription={elem.category} wishlist={elem.wishlist}/>
            )
        }
    )}
    </div>
    </>
  );
}   

export default Home