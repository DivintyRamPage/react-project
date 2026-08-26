import './Clients.css'

export function Clients() {
    return (
        <>
            <section className="clients">
                <div className="container">
                    <div className="clients__header">
                        <h2 className="clients__title">Our Clients</h2>
                        <p className="clients__subtitle">We have been working with some Fortune 500+ clients</p>
                    </div>
                    <div className="clients__logos">
                        <div className="clients__logo-item">
                            <img src="/Logo (1).png" alt="" className="clients__logo-img" />
                        </div>
                        <div className="clients__logo-item">
                            <img src="/Logo (2).png" alt="" className="clients__logo-img" />
                        </div>
                        <div className="clients__logo-item">
                            <img src="/Logo (3).png" alt="" className="clients__logo-img" />
                        </div>
                        <div className="clients__logo-item">
                            <img src="/Logo (4).png" alt="" className="clients__logo-img" />
                        </div>
                        <div className="clients__logo-item">
                            <img src="/Logo (5).png" alt="" className="clients__logo-img" />
                        </div>
                        <div className="clients__logo-item">
                            <img src="/Logo (6).png" alt="" className="clients__logo-img" />
                        </div>
                        <div className="clients__logo-item">
                            <img src="/Logo (7).png" alt="" className="clients__logo-img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}