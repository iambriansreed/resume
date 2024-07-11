import { usePage } from './page';

export default function Header() {
    const page = usePage();

    return (
        <header>
            <div className="title">
                <h1>Brian S. Reed</h1>
                <h2>Senior Software Engineer</h2>
            </div>
            <div className="contact">
                <ul>
                    <li>
                        <a href="mailto:me@iambrian.com">me@iambrian.com</a>
                    </li>
                    <li>
                        <a href="tel:+1-757-447-4447">757-447-4447</a>
                    </li>
                    <li>
                        <a href="https://iambrian.com">iambrian.com</a>
                    </li>
                </ul>
            </div>
            {page === 1 && (
                <p className="intro">
                    Senior Software Engineer with over 15 years of software development experience in local
                    Government, large corporations, and start-ups. Self-taught, autodidact with passion for
                    learning and exploration. An Army veteran with the resourcefulness to overcoming any
                    design and engineering challenge.
                </p>
            )}
        </header>
    );
}