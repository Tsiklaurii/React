import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <img src="/images/footer_logo.svg" alt="footer logo" className='footer_logo' />
            <div className='footer_nav'>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
            </div>
            <div className='soc_networks'>
                <img src="/images/fb.svg" alt="fb" />
                <img src="/images/insta.svg" alt="insta" />
                <img src="/images/twttr.svg" alt="twitter" />
                <img src="/images/pinterest.svg" alt="pinterest" />
            </div>
        </div>
    )
}

export default Footer