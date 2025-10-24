import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <img src="src/assets/images/footer_logo.svg" alt="footer logo" className='footer_logo' />
            <div className='footer_nav'>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
            </div>
            <div className='soc_networks'>
                <img src="src/assets/images/fb.svg" alt="fb" />
                <img src="src/assets/images/insta.svg" alt="insta" />
                <img src="src/assets/images/twttr.svg" alt="twitter" />
                <img src="src/assets/images/pinterest.svg" alt="pinterest" />
            </div>
        </div>
    )
}

export default Footer