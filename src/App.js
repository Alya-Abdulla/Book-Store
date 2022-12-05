// import Books from './component/Books/Books';
import './App.css';
import Header from './component/header/Header';
import Slider from './component/header/slider/Slider';
import Cards from './component/Cards/Cards'
import React, {useState} from 'react'
import request from 'superagent'

function App() {

  const [state, setState] = useState({});

  const [books, setBooks] = useState([])
 
  const  searchbook = (e) =>{
    e.preventDefault();
    request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({ q: state.searchFeild })
    .then((data) =>{
        debugger
        console.log(data.body);
        setBooks([...data.body.items])
      })}

  const handelsearch = (e) => {
    console.log(e.target.value);
    setState({ ...state, searchFeild: e.target.value });
  };


  return (
    <div>
      <Header handelsearch={handelsearch} searchbook={searchbook}  />
      <Slider />
      {/* <Books /> */}
      <Cards books={books} />
      
      
    </div>
  );
}
export default App;
