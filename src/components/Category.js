import React, { useState } from 'react'

function Category() {
  const [Cat , setCategory]=useState([]);

  const FetchCategory = ()=>{
    fetch("https://api.escuelajs.co/api/v1/categories")
    .then(res =>res.json())
    .then((data)=>{
        setCategory(data)
    })
  }

  {FetchCategory()}

  return (
    <div className='sidebar-category'>
        <div className="sidebar-top">
              <h2 className="sidebar-title">Category</h2>

              <button className="sidebar-close-btn" data-mobile-menu-close-btn="">
                <ion-icon name="close-outline" role="img" className="md hydrated" aria-label="close outline"></ion-icon>
              </button>
        </div>

        <ul className='sidebar-menu-category-list'>
            {
                Cat.map((item) => { 
                    return(
                        <li className="sidebar-menu-category">
                        <button className="sidebar-accordion-menu active" data-accordion-btn="">
            
                            <div className="menu-title-flex">
                            <img src={item.image} alt="clothes" width="20" height="20" class="menu-title-img" />
            
                            <p className="menu-title">{item.name}</p>
                            </div>
            
                            <div>
                            <ion-icon name="add-outline" className="add-icon md hydrated" role="img" aria-label="add outline"></ion-icon>
                            <ion-icon name="remove-outline" className="remove-icon md hydrated" role="img" aria-label="remove outline"></ion-icon>
                            </div>
            
                            </button>
                        </li>
                    )
            })

            }

        </ul>
    </div>
  )
}

export default Category
