import {Link} from "react-router";

export default function Home() {
    return (
        <>
            <section className="hero">
                <p className="eyebrow"> Welcome to Web Studio</p>

                <h1>A place where ideas take shape.</h1>
                <p className="intro"> We believe a great website starts with a clear idea.
                    We bring simple design and useful content together
                    to create experiences that feel natural and easy to use.</p>
                <Link to="/about" className="button">
                    Discover out story
                </Link>
            </section>

            <section aria-labelledby="services">
                <h2 id="services" className="section-title">
                    What we do
                </h2>
                <div className="cards">
                    <article className="card">
                        <span className="card-number">01</span>
                        <h3>
                            Simple design
                        </h3>
                        <p>
                            We choose balanced colors, readable text, and
                            clear layouts that let your content stand out.
                        </p>
                    </article>

                    <article className="card">
                        <span className="card-number">02</span>
                        <h3>Made for every screen</h3>
                        <p>
                            We build flexible pages that feel comfortable
                            to use on phones, tablets, and computers.
                        </p>
                    </article>

                    <article className="card">
                        <span className="card-number">03</span>
                        <h3>Attention to detail</h3>
                        <p>
                            From the first heading to the last link,
                            every element has a clear purpose.
                        </p>
                    </article>
                </div>

            </section>
            </>
    );
}