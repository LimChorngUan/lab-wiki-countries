import React from 'react';
import { NavLink } from 'react-router-dom';
import countries from '../countries.json';

const Navbar = () => {
  return (
    <nav className="col-3 mr-3">
      <ul className="list-group list-unstyled text-left">
        {countries.map(country => (
          <NavLink
            to={`/${country.name.common}`}
            className="text-dark p-3 list-group-item navlink"
            key={country.name.common}
          >
            <li className="list">{country.name.common}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
