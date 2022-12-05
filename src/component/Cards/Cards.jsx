import './Cards.css'
import React from "react";
import FirstBook from "../../images/book1.png";
import { useEffect, useState } from 'react'
const Card = (props) =>{

    const [numbers, setNumbers] = useState([2,4,6,8,12,10,12,14,16,18,20,22,24,26,28,30])

    // useEffect(() => {
        // const numbers = [2,4,6,8,12,10,12,14,16,18,20,22,24,26,28,30]
        // const randomNumber = numbers[Math.random(Math.floor(numbers.length))]
    // })

    return(
        <div className="container">
            {props.books ? props.books.map((b, i) => (
                <div>
        <div className="card">
            <img src={ b.volumeInfo.imageLinks.thumbnail} alt="" />
            <div className="bottom"></div>
            <h3 className="title">{ b.volumeInfo.title }</h3>
           {numbers.length ? <p className="amount">&#8377;{numbers[i]}</p> : null } 
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