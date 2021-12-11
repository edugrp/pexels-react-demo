import React, {useEffect, useState} from 'react';
import {searchApi} from "./pexels.service";
import Card from "./Card";

const CardList = () => {
    const [apiResponse, setApiResponse] = useState("*** Pesquisando imagens ***");

    useEffect(() => {
        searchApi('nature', 8).then(
            result => setApiResponse(result.photos.map(photo => <Card key={photo.id} photo={photo}/>
            )))
        ;
    }, []);

    return (
        <div className="container px-4 py-5" id="custom-cards">
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                {apiResponse}
            </div>
        </div>
    )
}
export default CardList


