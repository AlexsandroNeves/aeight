import React from "react"
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4 className="product-name">{product.title}</h4>
      <p>R$ {product.price.toFixed(2)}</p>
      <button>Comprar</button>
    </div>
  )
}

export default ProductCard
