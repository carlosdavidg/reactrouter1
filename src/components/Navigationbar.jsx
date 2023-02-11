import React from 'react'
import { Link } from 'react-router-dom'

const Navigationbar = () => {
  return (
    <div>

      <div className='nav'>
        <Link to="/Home"> Home 🏠</Link>
        <Link to="/Contacto">Contacto 📒</Link>
        <div className='navHappy'>
          <Link to="/Home">Happy Cake 🍰</Link>
        </div>
      </div>


    </div>
  )
}

export default Navigationbar