import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function AuthForm() {
  
    const [searchParams] = useSearchParams()
    const param = searchParams.get("mode") || "login"
  return (
    <form>
        <input type="text" placeholder='name' />
        <input type="email" placeholder='email' />
        <input type="password" placeholder='password' />
        <Link to={`?mode=${param}`}>{param}</Link>
        
    </form>
  )
  
}
