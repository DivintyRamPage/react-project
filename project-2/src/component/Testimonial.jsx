import './Testimonials.css'

export function Testimonials() {
    return (
        <>
            <section className="testimonial">
                <div className="container">
                    <div className="testimonial__item">
                        <div className="testimonial__logo">
                            <img src="/image 9.png" alt="" />
                        </div>
                        <div className="testimonial__content">
                            <p className="testimonial__quote">
                                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                            </p>
                            <div className="testimonial__author">
                                <span className="testimonial__author-name">Tim Smith</span>
                                <span className="testimonial__author-role">British Dragon Boat Racing Association</span>
                            </div>
                            <div className="testimonial__bottom-row">
                                <div className="testimonial__logos-row">
                                    <img src="/Logo (1).png" alt="" />
                                    <img src="/Logo (2).png" alt="" />
                                    <img src="/Logo (3).png" alt="" />
                                    <img src="/Logo (4).png" alt="" />
                                    <img src="/Logo (5).png" alt="" />
                                    <img src="/Logo (6).png" alt="" />
                                </div>
                                <a href="#" className="testimonial__link">Meet all customers →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
