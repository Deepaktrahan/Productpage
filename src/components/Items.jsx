import React from 'react'

const Items = (props) => {
  return (
    <div className="product-list-container">
      {props.products.map((product) => (
        <div className="product-card" key={product.id}>
          <img  src={product.image} alt={product.name} />
          <h3 className="product-title">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price}</p>
          <button className="BBB">Buy Now</button>
        </div>
      ))}
    </div>
  )
}

export default Items