import React from 'react';

const Card = (props) => {
    return (
        <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <ul className="d-flex list-unstyled mt-auto">

                        <li className="me-auto">
                            <img
                                src={props.photo.src.medium}
                                alt="Pexels" width="100" height="100"
                                className="rounded-circle border border-white"/>
                        </li>

                        <li className="d-flex align-items-center">
                            <svg className="bi me-2" width="1em" height="1em"></svg>
                            <small>{props.photo.photographer}</small>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    );
}
export default Card
