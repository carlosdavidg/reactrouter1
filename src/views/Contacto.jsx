import React from 'react'
import Footer from '../components/Footer.jsx'



const Contacto = () => {
  return (
    <div>
      
        <div className='form'>
            <h2>Cuentanos, En qué podemos ayudarte?</h2>
            <p>Correo:</p>
            <input type='email'></input>
            <p>Deja tu mensaje:</p>
            <textarea></textarea>
            <button type='submit'>Enviar</button>
        </div>
        <Footer></Footer>

    </div>
  )
}

export default Contacto