import React, { useState } from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const styles = {
    productCard: {
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '600px',
      margin: 'auto',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    productImg: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    productDetails: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    btnContainer: {
      display: 'flex',
      gap: '10px',
      marginTop: '1rem',
    },
    colorIcon: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      marginRight: '5px',
      border: '1px solid #ddd',
    },
  };
function ModalComponent({id}) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("Loading...");
    const [price, setPrice] = useState("0.00");
    const [category, setCategory] = useState("Loading...");
    const [description, setDescription] = useState("Loading...");
    const [image, setImage] = useState("https://via.placeholder.com/500");


    function openModal() {
        setOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
  
    function closeModal() {
        setOpen(false);
    }

    const  loadProdcut = ()=>{
       const url =  "https://fakestoreapi.com/products/"+id;
       fetch(url)
       .then(response => response.json())
       .then(data => {
            setImage(data.image);
            setTitle(data.title);
            setPrice(data.price);
            setDescription(data.description);
            setCategory(data.category);
       })
    }

    {loadProdcut()}

  return (
    <div>
    <button onClick={openModal}>Show product</button>
      <Modal
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
         <div className="container mt-5">
        <div className="product-card row">
           
            <div className="col-md-6">
                <img src={image} alt="Product Image" className="product-img" width={500} height={500}/>
            </div>

           
            <div className="col-md-6 product-details">
                <h3>{title}</h3>
                <p><strong>Price:</strong> ${price}</p>
                <p><strong>Description:</strong> {description}</p>
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Color Variations:</strong> 
                <span style={{ ...styles.colorIcon, backgroundColor: 'red' }}></span>
                <span style={{ ...styles.colorIcon, backgroundColor: 'blue' }}></span>
                 <span style={{ ...styles.colorIcon, backgroundColor: 'black' }}></span>
                </p>
                
               
                <div className="btn-container mt-3">
                    <button className="btn btn-success me-4">Add To Cart</button>
                    <button className="btn btn-warning ms-4">Buy Now</button>
                </div>
            </div>
        </div>
    </div>

      </Modal>
     
    </div>
  )
}

export default ModalComponent
