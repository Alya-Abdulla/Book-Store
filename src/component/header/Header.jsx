import { useState } from "react";
import "./Header.css";
import Navbar from "./Navbar";
import request from 'superagent'
// import SeaechArea from "./SearchArea"

// const [toggle, setToggle] = useState(false);
const Header = (props) => {
  // const [state, setState] = useState({});

  // const [books, setBooks] = useState([])
 
  // const  searchbook = (e) =>{
  //   e.preventDefault();
  //   request
  //     .get("https://www.googleapis.com/books/v1/volumes")
  //     .query({ q: state.searchFeild })
  //     .then((data) =>{
  //       console.log(data.body);
  //       setBooks([...data.body.items])
  //     })}

  // const handelsearch = (e) => {
  //   console.log(e.target.value);
  //   setState({ ...state, searchFeild: e.target.value });
  // };


  
  
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top-menu">
          {/* booststrap icon -list */}
          <i className="bi bi-list"></i>
          {/* {toggle ? <i className="bi bi-lg"></i> : <i className="bi bi-list"></i>} */}
        </div>

        <div className="header-top-phone">
          <i className="bi bi-telephone"></i>
          66331237
        </div>

        <div className="header-top-text">Welcome To Online Book Store</div>

        <div className="header-top-link">
          {/* booststrap */}
          <i className="bi bi-person-fill"></i>
          login
        </div>
      </div>

      <div className="header-middle">
        <div className="header-middle-logo">
          <i className="bi bi-book"></i>
          <b>Book</b>
          <b>Store</b>
        </div>

        <div className="header-middle-search-box">
          <form action="">
            <input
              onChange={props.handelsearch}
              className="header-middle-search-input"
              type="search"
              placeholder="Search in book store ..."
            />
            <i className="bi bi-search" onClick={props.searchbook}></i>
          </form>
        </div>

        <div className="header-middle-cart-wrapper">
          <i className="bi bi-cart3"></i>
        </div>
      </div>
      <Navbar />
    </header>
  );
};


export default Header;