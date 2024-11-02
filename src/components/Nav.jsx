import React from 'react'
import logo from '../images/imdb-icon.png'

export const Nav = () => {
  return (
    <div className=' border flex pl-3 py-4 space-x-8 items-center'>
        <img src={logo} className='w-16 hover:cursor-pointer '></img>
        <h1 className='font-bold text-2xl hover:cursor-pointer text-orange-400'>Movies</h1>
        <h1 className='font-bold text-2xl hover:cursor-pointer text-orange-400'>Favourites</h1>
    </div>
  )
}
