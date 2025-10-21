import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='product_card'>
        <h3>{props.name}</h3>
        <h4>{props.price}</h4>
        <img src={props.img} alt={props.name} />
        <p>{props.description}</p>
    </div>
  )
}

export default ProductCard