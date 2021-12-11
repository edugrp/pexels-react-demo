import React from 'react';

const RenderImage = (props) => {
    return (
        <div>
            <p>ID: <b>{props.photo.id}</b></p>
            <p>Fotografo: <b>{props.photo.photographer}</b></p>
            <p>
                <img src={props.photo.src.small} alt={props.photo.id}/>
            </p>
        </div>
    );
}
export default RenderImage
