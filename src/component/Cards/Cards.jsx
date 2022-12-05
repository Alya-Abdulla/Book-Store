import './Cards.css'
import React from "react";
import FirstBook from "../../images/book1.png";

const Card = (props) =>{

    return(
        <div className="container">
            {props.books ? props.books.map(b => (
                <div>
        <div className="card">
            <img src={ b.volumeInfo.imageLinks.thumbnail} alt="" />
            <div className="bottom"></div>
            <h3 className="title">{ b.volumeInfo.title }</h3>
            <p className="amount">&#8377;3290</p>
        </div>
                    
                    {/* <p>{ b.volumeInfo.title }</p> */}
                </div>
            )) : null}
        {/* <div className="card"> */}
            {/* <img src={FirstBook} alt="" /> */}
            {/* <div className="bottom"></div> */}
            {/* <h3 className="title">React Js</h3> */}
            {/* <p className="amount">&#8377;3290</p> */}
        {/* </div> */}
        </div>
    )
}

export default Card;