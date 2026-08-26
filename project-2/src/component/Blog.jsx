import './Blog.css'

export function Blog() {
    return (
        <>
            <section className="blog">
                <div className="container">
                    <div className="blog__header">
                        <h2 className="blog__title">Caring is the new marketing</h2>
                        <p className="blog__subtitle">
                            The Nextcent blog is the best place to read about the latest membership insights...
                        </p>
                    </div>

                    <div className="blog__posts">
                        <article className="blog__post">
                            <img src="/image 18.png" alt="" className="blog__post-image" />
                            <div className="blog__post-body">
                                <h3 className="blog__post-title">Creating Streamlined Safeguarding Processes with OneRen</h3>
                                <a href="#" className="blog__post-link">Read more →</a>
                            </div>
                        </article>

                        <article className="blog__post">
                            <img src="/image 19.png" alt="" className="blog__post-image" />
                            <div className="blog__post-body">
                                <h3 className="blog__post-title">What are your safeguarding responsibilities and how can you manage them?</h3>
                                <a href="#" className="blog__post-link">Read more →</a>
                            </div>
                        </article>

                        <article className="blog__post">
                            <img src="/image 20.png" alt="" className="blog__post-image" />
                            <div className="blog__post-body">
                                <h3 className="blog__post-title">Revamping the Membership Model with Triathlon Australia</h3>
                                <a href="#" className="blog__post-link">Read more →</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}