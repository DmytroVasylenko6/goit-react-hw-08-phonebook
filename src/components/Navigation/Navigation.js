import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <NavLink
        exact
        to="/"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
