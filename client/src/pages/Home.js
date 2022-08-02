import React from "react"
import { Provider } from "react-redux"
import store from "../../src/store"
// import Carouseltest from "../components/Carousel/index"
import Board from "../components/Board"
// import Carousel from "../components/Carousel/index"
import Cart from "../components/Cart/index"

const Home = () => {
    return (
        <div className="container">
            <Provider store={store}>
                {/* <Carouseltest /> */}
                <Board />
            </Provider>
            <Cart />
        </div>
    )
}

export default Home
