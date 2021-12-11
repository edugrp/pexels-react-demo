import React, {useEffect, useState} from 'react';
import {searchApi} from "./pexels.service";
import RenderImage from "./RenderImage";

const ShowImages = () => {
    const [apiResponse, setApiResponse] = useState("*** Pesquisando imagens ***");

    useEffect(() => {
        searchApi('city', 3).then(
            result => setApiResponse(result.photos.map(photo => <RenderImage key={photo.id} photo={photo}/>
            )))
        ;
    }, []);

    return (
        <div>
            <h2>Lista de imagens</h2>
            <div>{apiResponse}</div>
        </div>
    );
}
export default ShowImages
