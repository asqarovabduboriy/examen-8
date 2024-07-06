import React from 'react'


const NoutFound = ({img}) => {
  return (
  <div className="container">
      <div className='not_found'>
        <img src={img} alt="" />
        <button onClick={() => window.location.href = "/"}> На главную </button>
    </div>
  </div>
  )
}

export default NoutFound