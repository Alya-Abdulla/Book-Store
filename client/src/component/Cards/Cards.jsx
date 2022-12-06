import './Cards.css'
import React from "react";
import {useState} from 'react'
import Modal from '../modal/Modal';

const Card = (props) =>{

    const [numbers, setNumbers] = useState([2,4,6,8,12,10,12,14,16,18,20,22,24,26,28,30])

    // useEffect(() => {
        // const numbers = [2,4,6,8,12,10,12,14,16,18,20,22,24,26,28,30]
        // const randomNumber = numbers[Math.random(Math.floor(numbers.length))]
    // // })
    
        
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(props.id)

    return(
        <div className="container">
            {props.books ? props.books.map((b, i) => (
                <div>
        <div className="card">
            <img src={ b.volumeInfo.imageLinks.thumbnail} alt="" />
            <div className="bottom"></div>
            <h3 className="title">{ b.volumeInfo.title }</h3>
           {numbers.length ? <p className="amount">&#8377;{numbers[i]}</p> : null } 
           <i onClick={()=>{setShow(true);setItem(b)}}
            className="bi bi-eye-fill"></i>
        </div>
                    
                    {/* <p>{ b.volumeInfo.title }</p> */}
                </div>
            )) : null}

    
        <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
        </div>
    )
}

export default Card;