import './Stats.css'

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
                    <div className="stats__item">
                        <img src="/Icon (3).png" alt="" className="stats__icon" />
                        <div className="stats__item-text">
                            <span className="stats__number">2,245,341</span>
                            <span className="stats__label">Members</span>
                        </div>
                    </div>

                    <div className="stats__item">
                        <img src="/Icon (4).png" alt="" className="stats__icon" />
                        <div className="stats__item-text">
                            <span className="stats__number">46,328</span>
                            <span className="stats__label">Clubs</span>
                        </div>
                    </div>

                    <div className="stats__item">
                        <img src="/Icon (5).png" alt="" className="stats__icon" />
                        <div className="stats__item-text">
                            <span className="stats__number">828,867</span>
                            <span className="stats__label">Event Bookings</span>
                        </div>
                    </div>

                    <div className="stats__item">
                        <img src="/Icon (6).png" alt="" className="stats__icon" />
                        <div className="stats__item-text">
                            <span className="stats__number">1,926,436</span>
                            <span className="stats__label">Payments</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}