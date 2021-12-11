import React from 'react';

const CarouselItem = (props) => {
    return (
        <div className="carousel-item">
            <img src={props.photo.src.medium} className="d-block w-100 img-carousel" width="350" height="350" alt="Img-Carousel"/>
            <div className="carousel-caption d-none d-md-block">
            </div>
        </div>
    );
}
export default CarouselItem
