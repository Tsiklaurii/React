import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <img src="src/assets/images/logo.svg" alt="logo" className='logo' />
            <div className='nav'>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <button className='contact_btn'>Contact</button>
            </div>
        </div>
    )
}

export default Header