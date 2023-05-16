import React from 'react'
import './style.css'
function Product(props) {
    const {title, rating, images} = props
  return (
    <div className='product_container'>
        <img src={images[1]} className="product_image"/>
        <div className='product_summery'>
        <h4 className="product_title">{title}</h4>
        <div className='product_rating'>{rating}</div>
        </div>
    </div>
  )
}

export default Product