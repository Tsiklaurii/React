import React from 'react'

const Client = (props) => {
    return (
        <div className='client'>
            <img src={props.img} />
            <h4>{props.description}</h4>
            <h3>{props.name}</h3>
            <p>{props.position}</p>
        </div>
    )
}

export default Client