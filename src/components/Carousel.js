import React, {useEffect, useState} from 'react';
import {searchApi} from "./pexels.service";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
    const [apiResponse, setApiResponse] = useState("*** Pesquisando imagens ***");

    useEffect(() => {
        searchApi('nature', 3).then(
            result => setApiResponse(result.photos.map(photo => <CarouselItem key={photo.id} photo={photo}/>
            )))
        ;
    }, []);

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
                {apiResponse}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    )
}
export default Carousel
