import React from 'react'
import { InfoCard, InfoPhotoCard, Photo, PhotoCard } from './Cards'
import Client from './Client'

const Content = () => {
    return (
        <>
            <div className='content'>
                <InfoCard
                    title="Transform your brand"
                    info="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                    more="#"
                    borderColor="#FAD400"
                />
                <PhotoCard
                    img="/images/egg.jpg"
                />
                <PhotoCard
                    img="/images/glass.jpg"
                />
                <InfoCard
                    title="Stand out to the right audience"
                    info="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
                    more="#"
                    borderColor="#FE7766"
                />
                <InfoPhotoCard
                    img=" /images/cherry.png"
                    title="Graphic Design"
                    titleColor="#24554A"
                    info="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
                    infoColor="#3E7467"
                />
                <InfoPhotoCard
                    img="/images/tangerine.jpg"
                    title="Photography"
                    titleColor="#052C3B"
                    info="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                    infoColor="#19536C"
                />
            </div>
            <h3 className='clients_title'>CLIENT TESTIMONIALS</h3>
            <div className='clients'>
                <Client
                    img="/images/person1.png"
                    description="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                    name="Emily R."
                    position="Marketing Director"
                />
                <Client
                    img="/images/person2.png"
                    description="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
                    name="Thomas S."
                    position="Chief Operating Officer"
                />
                <Client
                    img="/images/person3.png"
                    description="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                    name="Jennie F."
                    position="Business Owner"
                />
            </div>
            <div className='photos'>
                <Photo
                    img="/images/milk.png"
                />
                <Photo
                    img="/images/orange.png"
                />
                <Photo
                    img="/images/waffle.png"
                />
                <Photo
                    img="/images/sugar.png"
                />
            </div>
        </>
    )
}

export default Content