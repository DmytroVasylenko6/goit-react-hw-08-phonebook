import React, { Component } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import s from './LoginForm.module.css';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
    };

    handleInputChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
      e.preventDefault();
      
      this.props.onLogin(this.state);

      this.setState({ email: '', password: '' });
    }

    render() {
        const { email, password } = this.state;

        return (
            
                <form onSubmit={this.handleSubmit} className={s.form}>

                    <Input
                      label="Email"
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Enter email..."
                      onChange={this.handleInputChange}
                    />

                    <Input
                      label="Password"
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Enter password..."
                      onChange={this.handleInputChange}
                    />

                  <Button text={'Log in'} type={'submit'} color={'blue'} />
                </form>
           
        )
    }
}


const mapDispatchToProps = {
  onLogin: authOperations.logIn,
}

export default connect(null, mapDispatchToProps)(LoginForm);