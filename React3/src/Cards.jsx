import React from 'react'

export const InfoCard = (props) => {
    return (
        <div className='info_card'>
            <div className='card'>
                <h1>{props.title}</h1>
                <p>{props.info}</p>
                <a href={props.more}>Learn More</a>
                <div className='underline'></div>
            </div>
        </div>
    )
}

export const PhotoCard = (props) => {
    return (
        <div className='photo_card'>
            <img src={props.img} />
        </div>
    )
}

export const InfoPhotoCard = (props) => {
    return (
        <div className='info_photo_card'>
            <img src={props.img} />
            <div className='info_photo_card_content'>
                <h1 style={{ color: props.titleColor }}>{props.title}</h1>
                <p style={{ color: props.infoColor }}>{props.info}</p>
            </div>
        </div>
    )
}

export const Photo = (props) => {
    return (
        <div className='photo'>
            <img src={props.img} />
        </div>
    )
}