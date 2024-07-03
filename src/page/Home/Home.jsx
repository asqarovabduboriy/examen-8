import React from 'react'
import Banner from '../../components/Banner/Banner'
import Main from '../../components/Main/Main'
import Kampaniya from '../../components/Kampaniya/Kampaniya'
import Product from '../../components/Pproduct/Product'
import Brand from '../../components/Brand/Brand'
import Blog from '../../components/Blog/Blog'

const Home = () => {
  return (
    <>
      <Banner/>
      <Main count={6}/>
      <Kampaniya/>
      <Product/>
      <Brand/>
      <Blog count={3}/>
    </>
  )
}

export default Home