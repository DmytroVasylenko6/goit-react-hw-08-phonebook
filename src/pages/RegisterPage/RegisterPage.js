import { React } from 'react';
import Section from '../../components/common/Section/Section';
import RegisterForm from '../../components/RegisterForm';


const RegisterPage = () =>  {

    return (
      <div className="App">
        <Section title="Register">
          <RegisterForm />
        </Section>
      </div>
    );
  }


export default RegisterPage;