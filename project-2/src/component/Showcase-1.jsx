import './Showcase-1.css'

export function Showcase1() {
    return (
        <>
            <section className="showcase">
                <div className="container">
                    <div className="showcase__item">
                        <div className="showcase__img">
                            <img src="/Frame 35.png" alt="" />
                        </div>
                    </div>
                    <div className="showcase__content">
                        <h2 className="showcase__title">The unseen of spending three <br /> years at Pixelgrade</h2>
                        <p className="showcase__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className="showcase__button">Learn More</button>
                    </div>
                </div>
            </section>
        </>
    );
}