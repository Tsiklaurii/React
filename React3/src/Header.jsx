import React from 'react'

const Header = () => {
    return (
        <div className='header_container'>
            <img src="src/assets/images/cover.png" alt="cover" className='cover' />

            <div className='header_content'>
                <div className='header'>
                    <img src="src/assets/images/logo.svg" alt="logo" className='logo' />
                    <div className='nav'>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Projects</a>
                        <button className='contact_btn'>Contact</button>
                    </div>
                </div>

                <h1 className="title">We are creatives</h1>
                <img src="src/assets/images/arrow.svg" alt="arrow" className='arrow' />
            </div>
        </div>
    )
}

export default Header