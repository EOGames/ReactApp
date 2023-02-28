import React from "react";
import Card from './Card.js';

const CardList = function ({robots})
{
  return robots.map (function(robo,i)
    {        
       return <Card key={i} id = {robo.id} name = {robo.name} email = {robo.email} />
    });
}
export default CardList;