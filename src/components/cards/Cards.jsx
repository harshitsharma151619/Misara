import React, { useState } from 'react'


import Card from 'react-bootstrap/Card';
const Cards = (props) => {
    
    const changeFav = ()=>{
        setliked(!liked)    
    }



  return (
    <div className='flex-shrink-0 h-full w-full  p-5 bg-[#E6BE8A] rounded-2xl hover:bg-amber-800 duration-600'>
        <Card className='flex justify-between'>
            <div className='overflow-hidden'>
                <Card.Img className='h-80 w-60' variant='centre' src={props.img} />
            </div>
            <Card.Body>
            <Card.Title className='px-4 py-1'>{props.name}</Card.Title>
            <Card.Text className='px-4 py-1 text-sm'>
              {props.discription}
            </Card.Text>
            <div className='flex flex-wrap justify-center m-2'>
                <ul className='list-none flex gap-2 mx-2 my-2'>
                    <li className='px-3 py-1 bg-[#F5F5F5] border border-gray-400 rounded text-sm hover:bg-[#E07A5F] duration-800'>XS</li>
                    <li className='px-3 py-1 bg-[#F5F5F5] border border-gray-400 rounded text-sm hover:bg-[#E07A5F] duration-800'>S</li>
                    <li className='px-3 py-1 bg-[#F5F5F5] border border-gray-400 rounded text-sm hover:bg-[#E07A5F] duration-800'>M</li>
                </ul>
                <ul className='list-none flex gap-2'>
                    <li className='px-3 py-1 bg-[#F5F5F5] border border-gray-400 rounded text-sm hover:bg-[#E07A5F] duration-800'>L</li>
                    <li className='px-3 py-1 bg-[#F5F5F5] border border-gray-400 rounded text-sm hover:bg-[#E07A5F] duration-800'>XL</li>
                    <li className='px-3 py-1 bg-[#F5F5F5] border border-gray-400 rounded text-sm hover:bg-[#E07A5F] duration-800'>XXL</li>
                </ul>
            </div>
            <div className='flex flex-wrap justify-center'>{props.wishlist? <svg xmlns="http://www.w3.org/2000/svg" onClick={changeFav} viewBox="0 0 24 24" fill="currentColor" className="size-6 m-4 flex gap-2">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
           4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 
           3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 
           8.5c0 3.78-3.4 6.86-8.55 
           11.54L12 21.35z" />
</svg>
: <svg xmlns="http://www.w3.org/2000/svg" onClick={changeFav} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 m-4 flex gap-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>}
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 m-4 flex gap-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                </svg>


            </div>
            <div className='flex flex-wrap '>
                <button className='m-4 flex gap-2 bg-[#F5F5F5] p-2 rounded-2xl text-xs hover:bg-[#E07A5F] duration-800'>Add to Cart</button>
                <button className='m-4 flex gap-2 bg-[#F5F5F5] p-2 rounded-2xl text-sm hover:bg-[#E07A5F] duration-800'>Buy Now</button>
            </div>
          </Card.Body>
        </Card>
        </div>
  )
}

export default Cards