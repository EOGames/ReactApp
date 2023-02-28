import React from "react";
import './index.css';

const Card = function(props)
{
    return(
        <div className="Card">
            <img src= {`https://robohash.org/${props.id}`} alt="pic" />
            <h4>Name:{props.name}</h4>
            <h4>Email:{props.email}</h4>
        </div>
    );
}
export default Card;