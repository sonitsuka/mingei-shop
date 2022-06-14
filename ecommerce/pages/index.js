import React from 'react'
import {Product, FooterBanner, HeroBanner} from '../components'

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className='products-heading'>
        <h2>Beset selling products</h2>
        <p>text variations</p>
      </div>

      <div className='products-container'>
        {['product 1', 'product 2'].map(
          (product) => product
        )}
      </div>
      
      <FooterBanner />
    </>
  )
}

export default Home