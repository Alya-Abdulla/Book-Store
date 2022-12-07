import { useContext } from "react";
// import BookStoreContext from "../../context/bookStorContext";
import "./Cart.css";
import {cartInfo} from '../../component/Cards/Cards'
import { Card } from "react-bootstrap";


const Cart = (props) => {
  // const data={cartInfo} = useContext(Card);
  // const data = useContext(Cards);
  
  // console.log(data)

  return (
   <>
     <div className="cart">
                <div className="cart-title">Your Shopping Cart</div>
           <div className="cart-wrapper">
            <div className="cart-items">

    {props.cart.length ? props.cart.map(item => (
      <div key={item.id} className="caet-item">
             <img src={ item.volumeInfo.imageLinks.thumbnail} alt="item.title" className="cart-item-img"  />
        <div className="inner-box">
                        {/* <img src={thumbnail} alt="" /> */}
                        {/* <img src={ item.volumeInfo.imageLinks.thumbnail} alt="" /> */}
                        <div className="cart-item-info">
                          <div>
                            <div className="cart-item-book-title">
                            <h1>Title:</h1>{item.volumeInfo.title}
                            </div>
                            <div className="cart-item-author">

                            <h3>Author :</h3>{item.volumeInfo.authors}
                            </div>
                          </div>
                            <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
                            {/* <div className="cart-item-quantity">
                              <button>
                                <i className="bi bi-plus-lg"></i>
                              </button>
                              <b>{item.quantity}</b>
                              <button>
                                <i className="bi bi-dash-lg"></i>
                              </button>
                              
                            </div> */}
                        </div>
                    </div>
                    {/* <h4 className="description">{item.volumeInfo.description}</h4> */}
                {/* <div className="modal-content-info-price">
            <b>Price: </b>${item.numbers}

                          </div> */}
        </div>
  )) : null}
              </div>
            </div>
            </div>   
              
              
   </>
    
  );
};

export default Cart;
