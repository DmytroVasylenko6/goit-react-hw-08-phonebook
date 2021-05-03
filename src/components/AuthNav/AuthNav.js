import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () =>  (
    <div>
      <NavLink
        exact
        to="/register"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        Login
      </NavLink>
    </div>
  );


export default AuthNav;