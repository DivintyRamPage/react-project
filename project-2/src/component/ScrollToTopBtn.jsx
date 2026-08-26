import './ScrollToTopBtn.css'
import { useState, useEffect } from 'react'

export function ScrollTopButton() {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        function scroll() {
            setVisible(window.scrollY > 300);
        }
        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll)
    }, [])

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <button className={`scroll-top-btn${visible ? ' scroll-top-btn-display' : ''}`} onClick={scrollToTop}>
            ↑
        </button>
    );
}