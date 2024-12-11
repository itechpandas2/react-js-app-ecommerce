import React, { useState } from 'react'
import ModalComponent from './ModalComponent';

function NewArrival() {
    const [product , setProduct] = useState([]);
    const showProduct = () =>{
        let url ="https://fakestoreapi.com/products?limit=4";

        fetch(url)
        .then(res =>res.json())
        .then(data => {
            setProduct(data);
        });
    }

{showProduct()}
  return (
    <div className='showcase-container'>
        { product.map( (pro)=>{
            return(
                <div className='showcase'>
                    <a href="#" class="showcase-img-box">
                      <img src={pro.image} alt="relaxed short full sleeve t-shirt" width="70" class="showcase-img"/>
                    </a>

                    <div className="showcase-content">

                      <a href="#">
                        <h4 className="showcase-title">{pro.title}</h4>
                      </a>

                      <a href="#" className="showcase-category">{pro.category}</a>

                      <div className="price-box">
                        <p className="price">₹{pro.price}</p>
                        {/* <del>$12.00</del> */}
                      </div>
                      <ModalComponent id={pro.id}/>
                    </div>
                </div>
              
            )
        })}

    </div>
  )
}

export default NewArrival
