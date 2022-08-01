// import React from "react"
// import Carousel from "react-bootstrap/Carousel"
// import "./style.css"

// const Jumbotron = () => {
//     return (
//         <Carousel fade variant="dark" className="carousel" controls={false}>
//             <Carousel.Item interval={9000} className="carouselItem carouselItem1"></Carousel.Item>
//             <Carousel.Item interval={9000} className="carouselItem carouselItem2"></Carousel.Item>
//             <Carousel.Item interval={9000} className="carouselItem carouselItem3"></Carousel.Item>
//         </Carousel>
//     )
// }

// export default Jumbotron

import React from "react"

function Jumbotron({ children }) {
    return <div style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}>{children}</div>
}

export default Jumbotron
