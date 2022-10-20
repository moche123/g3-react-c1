//! TODO: EXPLICAR CREACION DE COMPONENTE DE UNA FORMA MÁS ELEGANTE

import React from 'react'

function Header({name,age, gender='male',number}){
  return (
    <>
       <h2>Hello, I'm {name} and I'm {age} years old ( {gender} )</h2>
      <h3>number: {number}</h3>
    </>
   
  )
}

export default Header //! (SOLO UNA COSA) EN EL MOMENTO EN QUE LO IMPORTE, PUEDE TOMAR CUALQUIER NOMBRE