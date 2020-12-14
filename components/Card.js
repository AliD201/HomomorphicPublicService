import React from "react";
import { Link } from 'react-router-dom'

const Card = (props) => {
  const {name , email , id} = props;
  const path = `${window.location.origin}/${id}`
    return (
      <a href={path}>
        <div className="myCard dib br2  ma2 grow  shadow-5 tc" >
        {/* <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt="profile"/> */}
        <img src='/contract2.png' alt="profile"  className="icons"/>
        <br></br>
        <div className="cardTitle ">
          <h2 className="title">
            {name}
            </h2>
            <span  style={{color:"white"}}> ID : {id} </span>
        </div>
        </div>
        </a>
    )
}

export default Card;
