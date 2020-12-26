import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselCustom extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://www.hd-tecnologia.com/imagenes/articulos/2020/07/El-negocio-de-hardware-para-PC-Gamer-aumentar%C3%A1-en-3.600-millones-de-d%C3%B3lares-en-2020-debido-a-la-pandemia-de-COVID-19-2-1280x720.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://www.monederosmart.com/wp-content/uploads/2020/03/balkouras-nicos-ncOQxZe8Krw-unsplash-scaled-e1583162578291.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://www.profesionalreview.com/wp-content/uploads/2017/06/PC-Gaming.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
};


export default CarouselCustom;