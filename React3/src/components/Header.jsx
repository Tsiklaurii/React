import React, { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div>
            <img src="src/assets/images/cover.png" alt="cover" className='cover' />

            <div className='header_content'>
                <div className='header'>
                    <img src="src/assets/images/logo.svg" alt="logo" className='logo' />
                    <div className={`nav ${menuOpen ? 'open' : ''}`}>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Projects</a>
                        <button className='contact_btn'>Contact</button>
                    </div>
                    <div className={`burger_menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <h1 className="title">We are creatives</h1>
                <img src="src/assets/images/arrow.svg" alt="arrow" className='arrow' />
            </div>
        </div>
    )
}

export default Header