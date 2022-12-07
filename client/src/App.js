
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './component/header/Header';
import React, {useState, useContext} from 'react'
import request from 'superagent'
import HomePage from "./pages/HomePage";
import About from "./pages/about/About";
import Authors from './pages/authors/Authors';
import Cart from "./pages/cart/Cart";
import Login from './pages/forms/Login';
import Register from './pages/forms/Register'
import Contact from './pages/contact/Contact';
import Book from './pages/book/Book';


function App() {

  const [state, setState] = useState({});

  const [books, setBooks] = useState([])

  const [cart, setCart] = useState([])

 
  const searchbook = (e) =>{
    e.preventDefault();
    request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({ q: state.searchFeild })
    .then((data) =>{
        debugger
        console.log(data.body);
        // if (data != undefined){
          setBooks([...data.body.items])
        // } else {
        //   console.log('search again!')
        // }
      })}

  const handelsearch = (e) => {
    console.log(e.target.value);
    setState({ ...state, searchFeild: e.target.value });
  };


  return (
    <BrowserRouter>
      <Header handelsearch={handelsearch} searchbook={searchbook}  />
      
      {/* <Services /> */}
      <Routes>
        <Route path="/home" element={<HomePage books={books} cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book/:id" element={<Contact />} />

   


      
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;