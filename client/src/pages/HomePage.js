import Services from "../component/Services/Services"
// import Slider from  "../component/Book-Slider/BookSlider"
import Slider from "../component/header/slider/Slider"
import Cards from "../component/Cards/Cards"


const  HomePage = ({books, setCart, cart}) =>

{
    return(
        <div className="homepage">
        <Slider />
        <Services />
        <Cards cart={cart} setCart={setCart} books={books} />
        </div>
    )
}

export default HomePage;