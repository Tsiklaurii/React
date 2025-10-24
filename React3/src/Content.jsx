import React from 'react'
import { InfoCard, InfoPhotoCard, PhotoCard } from './Cards'

const Content = () => {
    return (
        <>
            <div className='content'>
                <InfoCard
                    title="Transform your brand"
                    info="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                    more="#"
                />
                <PhotoCard
                    img="src/assets/images/egg.jpg"
                />
                <PhotoCard
                    img="src/assets/images/glass.jpg"
                />
                <InfoCard
                    title="Stand out to the right audience"
                    info="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
                    more="#"
                />
                <InfoPhotoCard
                    img="src/assets/images/cherry.png"
                    title="Graphic Design"
                    titleColor="#24554A"
                    info="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
                    infoColor="#3E7467"
                />
                <InfoPhotoCard
                    img="src/assets/images/tangerine.jpg"
                    title="Photography"
                    titleColor="#052C3B"
                    info="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                    infoColor="#19536C"
                />
            </div>
        </>
    )
}

export default Content