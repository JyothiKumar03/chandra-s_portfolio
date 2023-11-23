import React from 'react'
import "./product.css"

export default function Product({img,link}) {
  return (
    <div className='p'>
        <a href={link} target='_blank'>
            <img src={img} alt='screenshot' className='p-img' />
        </a>
    </div>
  )
}
