import './Header.css'
import { useState, useEffect } from 'react';






export function Header({ isLoggedIn, onRegisterClick, onLogoutClick }) {
    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        setMenuOpen((prev) => !prev);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    useEffect(() => {
        function windowResize() {
            if (window.innerWidth > 900) {
                setMenuOpen(false);
            }
        }
        window.addEventListener('resize', windowResize);
        return () => window.removeEventListener('resize', windowResize)
    }, [])

    useEffect(() => {
        document.body.classList.toggle('menu-open', menuOpen)
    }, [menuOpen]);

    return (
        <>
            <header className="header">
                <a
                    className={`burger${menuOpen ? ' active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <div className={`header-top${menuOpen ? ' menu-open' : ''}`}>
                    <div className="container">
                        <div className="header-top-inner">
                            <div className="header-logo">
                                <img src="/Logo.png" alt="" />
                            </div>
                            <nav className="header-nav">
                                <ul className="header-nav-list">
                                    <li className="header-nav-item">
                                        <a className="header-nav-link" href="#" onClick={(e) => {
                                            e.preventDefault()
                                            closeMenu();
                                        }}>Home</a>
                                    </li>
                                    <li className="header-nav-item">
                                        <a className="header-nav-link" href="#" onClick={(e) => {
                                            e.preventDefault()
                                            closeMenu();
                                        }}>Features</a>
                                    </li>
                                    <li className="header-nav-item">
                                        <a className="header-nav-link" href="#" onClick={(e) => {
                                            e.preventDefault()
                                            closeMenu();
                                        }}>Community</a>
                                    </li>
                                    <li className="header-nav-item">
                                        <a className="header-nav-link" href="#" onClick={(e) => {
                                            e.preventDefault()
                                            closeMenu();
                                        }}>Blog</a>
                                    </li>
                                    <li className="header-nav-item">
                                        <a className="header-nav-link" href="#" onClick={(e) => {
                                            e.preventDefault()
                                            closeMenu();
                                        }}>Pricing</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header-user-nav">
                                {isLoggedIn ? (
                                    <div className="header-user-btn button" onClick={onLogoutClick}>Log out</div>
                                ) : (
                                <div className="header-user-btn button" onClick={onRegisterClick}>Register now</div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>

                {menuOpen && <div className='menu-overlay active' onClick={closeMenu}></div>}
            </header>
        </>
    );
}