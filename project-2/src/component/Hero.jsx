import './Hero.css'

export function Hero() {
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <div className="regs">
                        <div className="reg">
                            <div className="p">
                                <h1 id="p1">Lessons and insights <br /> from 8 years</h1>
                                <h6 id="p2">Where to grow your business as a photographer: site or social media?</h6>
                            </div>
                            <div className="reg-btn">Register</div>
                        </div>
                        <div>
                            <img src="/Illustration.png" alt="" />
                        </div>
                    </div>
                    <div className="dots-container">
                        <div className="dot active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </section>
        </>
    );
}