import "./productList.css"
import "./Product"
import React from 'react'
import Product from "./Product"
import {products}  from "../../data.js"

export default function ProductList() {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Build & Learn</h1>
            <p className="pl-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum aut eveniet minima reprehenderit voluptates, dolorem quos labore, aperiam culpa temporibus velit. Aut veritatis, non nisi iusto quaerat ipsum commodi.
            </p>
        </div>
        <div className="pl-list">
            {products.map((item)=>(
                <Product key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>
    </div>
  )
}
