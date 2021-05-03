import Navigation from '../Navigation';
import { connect } from 'react-redux';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import s from './AppBar.module.css';
import { authSelectors } from '../../redux/auth';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={s.Header}>
      <Navigation />
     {isAuthenticated ? <UserMenu/> : <AuthNav/>} 
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});


export default connect(mapStateToProps)(AppBar);
