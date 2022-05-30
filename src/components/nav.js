import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <section className="navigation">
        <p className="nav-brand-name"><NavLink to="/" className="nav-link text-black"><a>Dawg E-cycle</a></NavLink></p>
        <nav className="navbar navigation-links">
            <ul className="nav navbar-fixed-top">
                <li><NavLink to="/learn" className="nav-link text-black">Learn</NavLink></li>
                <li><Link to="/map" className="nav-link text-black">Map</Link></li>
                <li><NavLink to="/faq" className="nav-link text-black">FAQ</NavLink></li>
            </ul>
        </nav>
    </section>
  );
}