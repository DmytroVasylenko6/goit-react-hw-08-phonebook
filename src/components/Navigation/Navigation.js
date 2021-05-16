import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const Navigation = ({isAuthenticated}) => {
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

      {isAuthenticated && <NavLink
        to="/contacts"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        Contacts
      </NavLink>}
      
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
})

export default connect(mapStateToProps)(Navigation);
