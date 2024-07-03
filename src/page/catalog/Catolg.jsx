import React from 'react'
import Main from '../../components/Main/Main'
import Brand from '../../components/Brand/Brand'
import Blog from '../../components/Blog/Blog'

const Catolg = () => {
  return (
  <div className="container">
    <Main/>
    <Brand/>
    <Blog count={3}/>
  </div>
  )
}

export default Catolg