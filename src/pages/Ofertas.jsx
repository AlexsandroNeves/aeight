import React, { useEffect, useState } from "react"
import ProductCard from "../components/product/ProductCard"
import bannerImage from "../assets/banner.webp"
import "./Ofertas.css"

const Ofertas = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className="ofertas-container">
      <img className="banner" src={bannerImage} alt="Banner" />
      <h2>Ofertas da Semana</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Ofertas

