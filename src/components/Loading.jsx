import React from 'react'

function Loading() {
  return (
    <div className='flex items-center justify-center h-12'>
      <p> <img className='h-[80px] m-12 animate-spin' src="/coffee.png" alt="" /></p>
    </div>
  )
}

export default Loading
