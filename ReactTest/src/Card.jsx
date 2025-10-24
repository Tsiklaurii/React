import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} />
            <div className='card_info'>
                <h3>{props.title}</h3>
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}

export default Card