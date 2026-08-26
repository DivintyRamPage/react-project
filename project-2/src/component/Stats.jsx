import './Stats.css'
import { useEffect, useRef, useState } from 'react';

// Хук, який рахує число від 0 до target, коли елемент потрапляє в зону видимості
function useCountUp(target, duration = 1500) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false); // щоб анімація запустилась лише один раз

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const startTime = performance.now();

                    function animate(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // easeOutQuad — на початку швидко, в кінці сповільнюється
                        const eased = 1 - (1 - progress) * (1 - progress);
                        setCount(Math.floor(eased * target));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(target); // гарантуємо точне кінцеве значення
                        }
                    }

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 } // спрацьовує, коли видно хоча б 30% елемента
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return [count, ref];
}

// Форматує число з розділювачами тисяч: 2245341 → "2,245,341"
function formatNumber(num) {
    return num.toLocaleString('en-US');
}

function StatItem({ icon, target, label }) {
    const [count, ref] = useCountUp(target);

    return (
        <div className="stats__item" ref={ref}>
            <img src={icon} alt="" className="stats__icon" />
            <div className="stats__item-text">
                <span className="stats__number">{formatNumber(count)}</span>
                <span className="stats__label">{label}</span>
            </div>
        </div>
    );
}

export function Stats() {
    return (
        <section className="stats">
            <div className="container">
                <div className="stats__header">
                    <h2 className="stats__title">
                        Helping a local <span className="stats__title-accent">business reinvent itself</span>
                    </h2>
                    <p className="stats__subtitle">We reached here with our hard work and dedication</p>
                </div>

                <div className="stats__items">
                    <StatItem icon="/Icon (3).png" target={2245341} label="Members" />
                    <StatItem icon="/Icon (4).png" target={46328} label="Clubs" />
                    <StatItem icon="/Icon (5).png" target={828867} label="Event Bookings" />
                    <StatItem icon="/Icon (6).png" target={1926436} label="Payments" />
                </div>
            </div>
        </section>
    );
}