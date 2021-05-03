import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import s from './RegisterForm.module.css';
import { authOperations } from '../../redux/auth';

class RegisterForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleInputChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
 
      this.props.onRegister(this.state);
      
        this.setState({ name: '', email: '', password: '' });
    }

    render() {
        const { name, email, password } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit} className={s.form}>
                    <Input
                       label="Name"
                       type="text"
                       name="name"
                       value={name}
                       placeholder="Enter name..."
                       onChange={this.handleInputChange}
                     />

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

                  <Button text={'Register'} type={'submit'} color={'blue'} />
                </form>
           </div>
        )
    }
}



const mapDispatchToProps = {
  onRegister: authOperations.register,
}


export default connect(null, mapDispatchToProps)(RegisterForm);