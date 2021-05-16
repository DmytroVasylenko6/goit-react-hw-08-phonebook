import React, {Component} from 'react';
import AppBar from './components/AppBar';
import Router from './Router';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';



class App extends Component {
   
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
   return <>
    <AppBar />
    <Router />
    </>
  }
 }

const mapDispatchToProps = {
   onGetCurrentUser: authOperations.getCurrentUser
 }

export default connect(null, mapDispatchToProps)(App);

  
