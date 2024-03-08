import React from 'react'
import Button from '../components/Button'

function Error404() {
  return (
    <div className='h-[90vh] flex flex-col items-center justify-center'>
      <h1 className='font-bold text-amber-800 text-3xl'>Error 404</h1>
      <Button type="link" to="/">Home</Button>
    </div>
  )
}

export default Error404
