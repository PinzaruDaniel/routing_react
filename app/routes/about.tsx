import {Link} from "react-router";

export default function About() {
    return (
        <>
            <section className="hero">
                <p className="eyebrow">Our story</p>

                <h1>Good things start with small steps.</h1>
                <p className="intro">
                    Web Studio is an imaginary project built around
                    creativity and learning. We take simple ideas
                    and turn them into clear, thoughtful web pages.
                </p>
            </section>
            <section className="about-panel">
                <h2> What drives us</h2>

                <p>
                    We enjoy understanding how things work and finding
                    ways to make the web more welcoming. Every project
                    is an opportunity to learn something new and
                    improve our skills.
                </p>

                <h2>Our values</h2>

                <ul className="values">
                    <li>Clarity in both design and communication.</li>
                    <li>Curiosity and a willingness to keep learning.</li>
                    <li>Care for the people who use our websites.</li>
                </ul>

                <Link to="/" className="button">
                    Back to Home
                </Link>
            </section>
        </>
    );
}