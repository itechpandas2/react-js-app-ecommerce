
import React, { useState } from 'react'

function Products() {

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
    <div className='product-grid'>

{ product.map( (pro)=>{
            return(
        <div className="showcase">
                <div className="showcase-banner">
                  <img src={pro.image} alt="Mens Winter Leathers Jackets" width="300" class="product-img default"/>
                  <img src={pro.image} alt="Mens Winter Leathers Jackets" width="300" class="product-img hover" />
                  <p className="showcase-badge">15%</p>
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline" role="img" className="md hydrated" aria-label="heart outline"></ion-icon>
                    </button>

                    <button className="btn-action">
                      <ion-icon name="eye-outline" role="img" className="md hydrated" aria-label="eye outline"></ion-icon>
                    </button>

                    <button className="btn-action">
                      <ion-icon name="repeat-outline" role="img" className="md hydrated" aria-label="repeat outline"></ion-icon>
                    </button>

                    <button className="btn-action">
                      <ion-icon name="bag-add-outline" role="img" className="md hydrated" aria-label="bag add outline"></ion-icon>
                    </button>

                  </div>

                </div>

                <div className="showcase-content">
                  <a href="#" className="showcase-category">jacket</a>
                  <a href="#">
                    <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
                  </a>

                  <div className="showcase-rating">
                    <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                    <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                    <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                    <ion-icon name="star-outline" role="img" className="md hydrated" aria-label="star outline"></ion-icon>
                    <ion-icon name="star-outline" role="img" className="md hydrated" aria-label="star outline"></ion-icon>
                  </div>

                  <div className="price-box">
                    <p className="price">$48.00</p>
                    <del>$75.00</del>
                  </div>

                </div>

        </div>

    )
    })
}

    </div>
  )
}

export default Products
