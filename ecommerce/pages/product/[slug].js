// using [] as file name = dynamic file

import React from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiFillStar, AiOutlineStar, AiOutlinePlus } from 'react-icons/ai'

const ProductDetails = ({product, products}) => {
    const {image, name, details, price} = product
    return (
        <div>
            <div className='product-detail-container'>
                <div className='image-container'>
                    <img src={urlFor(image && image[0])} />
                </div>
                <div className='small-images-container'>
                    {image?.map((item, i) => (
                        <img
                            src={urlFor(item)}
                            className =''
                            onMouseEnter=''
                        />
                    ))}
                </div>
                <div className='product-details-desc'>
                    <h1>{} </h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(number)</p>
                    </div>
                    <h4>Details: </h4>
                    <p>{details}</p>
                    <p className='price'>€{price}</p>
                    <div className='quantity'>
                        <h3>Quantity: </h3>
                        <p className='quantity-desc'>
                            <span className='munus'onClick=''>
                                <AiOutlineMinus />
                            </span>
                            <span className='num'onClick=''>
                                0
                            </span>
                            <span className='plus'onClick=''>
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStatistcPaths = async () => {
     const query = `*[_type == "product]{
        slug {
            current
        }
     }`

     const products = await client.fetch(query)
     const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
     }) )

     return{
        paths,
        fallback: 'blocking'
     }
}

export const getStaticProps  = async({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`
    const productQuery = '*[_type == "product"]'
    
    const product = await client.fetch(query)  
    const products = await client.fetch(productQuery)
  
    return {
      props: { products, product }
    }
  }


export default ProductDetails