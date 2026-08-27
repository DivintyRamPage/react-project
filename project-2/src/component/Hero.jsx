import './Hero.css';
import { useState } from 'react';

const slides = [
    {
        title: "Lessons and insights \n from 8 years",
        subtitle: "Where to grow your business as a photographer: site or social media?",
        image: "/Illustration.png"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/Illustration.png"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/Illustration.png"
    }
];

export function Hero({ isLoggedIn, onRegisterClick, onLogoutClick }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className='hero'>
            <div className="container">
                <div className="hero-slider-wrapper">
                    <div 
                        className="hero-track" 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div className="hero-slide" key={index}>
                                <div className="regs">
                                    <div className="reg">
                                        <div className="p">
                                            <h1 id="p1">{slide.title}</h1>
                                            <h6 id="p2">{slide.subtitle}</h6>
                                        </div>
                                        {isLoggedIn ? (
                                            <div className="header-user-btn button" onClick={onLogoutClick}>Log out</div>
                                        ) : (
                                            <div className="header-user-btn button" onClick={onRegisterClick}>Register now</div>
                                        )}
                                    </div>
                                    <div>
                                        <img src={slide.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="dots-container">
                    {slides.map((dot, index) => (
                        <div 
                            key={index} 
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}