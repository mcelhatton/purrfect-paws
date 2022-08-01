// import React, { Carousel } from "react-bootstrap/Carousel"

// function Carouseltest() {
//     return (
//         <Carousel>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="../Images/2cd43b_ad23f564a47043fbb05fd123ecf4eb8f_mv2.png"
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img className="d-block w-100" src="../Images/Dog-Face-PNG-Free-Download.png" alt="Second slide" />

//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img className="d-block w-100" src="../Images/dog-png-30.png" alt="Third slide" />

//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     )
// }

// export default Carouseltest

// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
// import React, { useState } from "react"
// import { images } from "../Helpers/CarouselData"
// import "./Carousel.css"

// function Carousel() {
//     const [currImg, setCurrImg] = useState(0)

//     return (
//         <div className="carousel">
//             <div className="carouselInner" style={{ backgroundImage: `url(${images[currImg].img})` }}>
//                 <div
//                     className="left"
//                     onClick={() => {
//                         currImg > 0 && setCurrImg(currImg - 1)
//                     }}
//                 >
//                     <ArrowBackIosIcon style={{ fontSize: 30 }} />
//                 </div>
//                 <div className="center">
//                     <h1>{images[currImg].title}</h1>
//                     <p>{images[currImg].subtitle}</p>
//                 </div>
//                 <div
//                     className="right"
//                     onClick={() => {
//                         currImg < images.length - 1 && setCurrImg(currImg + 1)
//                     }}
//                 >
//                     <ArrowForwardIosIcon style={{ fontSize: 30 }} />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Carousel

// // import React, { Component } from "react"
// // import ReactDOM from "react-dom"
// // import { Carousel } from "react-responsive-carousel"
// // import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader

// // class DemoCarousel extends Component {
// //     render() {
// //         return (
// //             <Carousel>
// //                 <div>
// //                     <img src="/client/src/assets/2cd43b_ad23f564a47043fbb05fd123ecf4eb8f_mv2.png" />
// //                     <p className="legend">Legend 1</p>
// //                 </div>
// //                 <div>
// //                     <img src="/client/src/assets/Dog-Face-PNG-Free-Download.png" />
// //                     <p className="legend">Legend 2</p>
// //                 </div>
// //                 <div>
// //                     <img src="/client/src/assets/dog-png-30.png" />
// //                     <p className="legend">Legend 3</p>
// //                 </div>
// //                 <div>
// //                     <img src="/client/src/assets/png-clipart-dogs-dogs-thumbnail.png" />
// //                     <p className="legend">Legend 4</p>
// //                 </div>
// //             </Carousel>
// //         )
// //     }
// // }

// // ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"))

// // Don't forget to include the css in your page

// // Using webpack or parcel with a style loader
// // import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// // Using html tag:
// // <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
