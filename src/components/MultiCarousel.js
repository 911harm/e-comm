import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export default function MultiCarousel(props) {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}//buttons bot
            responsive={responsive}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .9"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
            <div>
                <img src="https://gamergf.com.ve/wp-content/uploads/2020/03/pcgamer_i7-9700f_rtx2060-300x300.jpg" alt="pc-master-race" />
            </div>
            <div>
                <img src="https://www.botechnews.com/wp-content/uploads/2020/12/GIGABYTE-RADEON-RX-6800-XT-300X300.jpg" alt="pc-master-race" />
            </div>
            <div>
                <img src="https://teratech.com.co/site/wp-content/uploads/2020/01/PCG005-300x300.jpg" alt="pc-master-race" />
            </div>
            <div>
                <img src="https://www.primeabgb.com/wp-content/uploads/2020/11/Sapphire-AMD-Radeon-RX-6800-XT-Gaming-Graphics-Card-21304-01-20G-300x300.jpg" alt="pc-master-race" />
            </div>
            <div>
                <img src="https://sealsolutionsandhardware.000webhostapp.com/wp-content/uploads/2018/08/pcgamer11-300x300.jpg" alt="pc-master-race" />
            </div>
            <div>
                <img src="https://www.imvendorportal.com/prodpictures/ES_B961241_71523574_0478991113.jpg" alt="pc-master-race" />
            </div>
            <div>
                <img src="https://www.gamerweb.org/wp-content/uploads/2018/10/Captura-300x300.png" alt="pc-master-race" />
            </div>
            

        </Carousel>
    )
}
