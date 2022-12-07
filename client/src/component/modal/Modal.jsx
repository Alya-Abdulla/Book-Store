import './Modal.css'
import react from 'react';
import { Link } from "react-router-dom";
import {useState} from 'react'


const Modal=({show,item,onClose, setCart, cart})=>{
    
    if(!show)
    {
        return null;
    }

    const addToCart = (book) => {
        console.log('clicked!')
        setCart([...cart, book ])
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="bi bi-x-circle-fill modal-icon"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3>
                            <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
                            <a href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
             
                <div className="modal-content-info-price">
            <b>Price: </b>$ {} 
          </div> 
          <div className="modal-add-to-cart">
            <input
              className="modal-add-to-cart-input"
              type="number"
              min="1"
              max="100"
          
              // onChange={e => setQty(e.target.value)}
            />
            <button 
            onClick={() => addToCart(item)} 
            className="modal-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
                </div>

          </div>

            </div>
        </>
    )
}
export default Modal;