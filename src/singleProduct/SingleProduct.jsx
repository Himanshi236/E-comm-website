import React from 'react'
import '../singleProduct/singleProduct.css'

const SingleProduct = ({id,title,price,description,category,image,rating}) => {
  return (
    <>
      <div className="card">
        {/* <div className="imgCont"></div> */}
        <img src={image} alt={title} className="image" />
        <div className="titleCont">{title}</div>
        <div className="priceCont">${price}</div>
      </div>
    </>
  );
}

export default SingleProduct