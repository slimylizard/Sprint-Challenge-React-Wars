import React from 'react';

function Card(props) {
    console.log(props);
    return(
        <div className='card-thing'>
            <h1>{props.name}</h1>
            <p>{props.height}</p>
            <p>{props.eye_color}</p>
            <p>{props.hair_color}</p>
        </div>
    );
};

export default Card;