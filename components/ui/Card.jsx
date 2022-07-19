import React from 'react'
import Parser from "html-react-parser";

const Card = ({title,video}) => {
  return (
    <div>
        <h1 style={{display:"none"}}>{title}</h1>
        {Parser(video)}
    </div>
  )
}

export default Card