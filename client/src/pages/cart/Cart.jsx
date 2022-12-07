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
    <h1>My Cart</h1>
    {props.cart.length ? props.cart.map(item => (
      <div>

                    <div className="inner-box">
                        {/* <img src={thumbnail} alt="" /> */}
                        <img src={ item.volumeInfo.imageLinks.thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3>
                            <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
                            <a href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                <div className="modal-content-info-price">
            <b>Price: </b>${item.numbers}

                          </div>
            </div>
  )) : null}
   </>
    
  );
};

export default Cart;
