import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageContainer from '../components/common/PageContainer';
import HomePage from '../pages/HomePage';
import ContactsPage from '../pages/ContactsPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';


export const paths = {
  MAIN: '/',
  CONTACTS: '/contacts',
  LOGIN: '/login',
  REGISTER: '/register'
};

const Router = () => {
  return (
    <PageContainer>
      <Switch>
        <Route exact path={paths.MAIN} component={HomePage} />
        <Route path={paths.CONTACTS} component={ContactsPage} />
        <Route path={paths.REGISTER} component={RegisterPage} />
        <Route path={paths.LOGIN} component={LoginPage} />
        <Redirect to="/" />
      </Switch>
    </PageContainer>
  );
};

export default Router;
