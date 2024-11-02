import React from 'react'


export const Banner = () => {
  return (
    <>
        {/* <img src={img} className='h-72 w-screen'></img>
        <div className='relative bottom-10'>
            <div className='text-xl bg-gray-900 text-center text-white h-10 pt-2
                       bg-opacity-40 font-bold'>ISLAND</div>
        </div> */}
        <div className='bg-banner h-[40vh] bg-center bg-cover flex items-end md:h-[60vh]'>
          <div className='text-xl md:text-3xl text-white bg-gray-900 bg-opacity-40 p-4 text-center w-full '>ISLAND</div>
        </div>
    </>
  )
}
