//Buat component button pada file ini, jadikan button menjadi child dari Pages/Counter
import React from 'react'

//Props drilling
export const Button = ({act, label}) => { //Memakai props dari parent component nya, dipanggil menggunakan metode desctructuring
  return (
    <button className='button-5' onClick={act}>
      {label}
    </button>
  )
}