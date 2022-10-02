import React from 'react'
import './ProductCard.sass'

const ProductCard = (props) => {
    const { img, name, reviews, price } = props
  return (
    <div className='product-card'>
        <img src={img} alt="product"  className='product-img'/>
        <div className="product-info">
            <h1>{name}</h1>
            <img src="https://cdn.shopify.com/s/files/1/0616/8651/3892/files/Group_116_200x.png?v=1641519992" 
                alt="rating" className="product-rating" />
            <h4>{reviews} Reviews</h4>
            <h2>${price}</h2>
        </div>
        <button className="add-to-cart">
            Add to Cart
        </button>
    </div>
  )
}

export default ProductCard