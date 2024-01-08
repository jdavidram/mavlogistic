import { FaPowerOff, FaDatabase, FaSun, FaMoon } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { ReactComponent as MavLogo } from './logo.svg';
import info from './info.json';
import './layout.scss';

function Header() {
    return (
        <header>
            <MavLogo />
        </header>
    );
}

function SpanBox({ title, links }) {
    return (
        <span>
            <h3>{ title }</h3>
            <ul>
                {links.map((link) => (
                    <li key={link.text}><NavLink
                        className={({ isActive }) => (isActive ? "activate": "inactivate")}
                        to={link.to}
                    >
                        {link.text}
                    </NavLink></li>
                ))}
            </ul>
        </span>
    );
}

function Menu() {
    const spanboxes = [info.forms, info.tables];
    return (
        <nav>
            {spanboxes.map((i) => (
                <SpanBox title={i.title} links={i.links} key={i.title} />
            ))}
        </nav>
    );
}

function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <FaPowerOff />
                </li>
                <li>
                    <FaDatabase />
                </li>
                <li>
                    <FaMoon />
                </li>
                <li>
                    <FaSun />
                </li>
            </ul>
        </footer>
    );
}

function Layout() {
    return (
        <>
            <Header />
            <Menu />
            <Footer />
        </>
    );
}

export { Layout };