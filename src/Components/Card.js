import React from 'react'

const Card = ({name,description})=>{

    // console.log("props -----> ",props);

    return <div className='Card'>
        <h2>{name}</h2>
        <p>{description}</p>
        <button>Connect</button>
    </div>
}

export default Card
