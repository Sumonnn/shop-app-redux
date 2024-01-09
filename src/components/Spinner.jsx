import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
        <div className='spinner'></div>
        <h2 className='text-md font-bold'>Loading.....</h2>
    </div>
  )
}

export default Spinner