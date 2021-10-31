import React from 'react';
import styles from '../styles/pages/Signin.module.scss'
import Input from '../components/Input';
import axios from '../axios/axios';

interface SigninProps{
  email: string,
  token: string,
}

const inputArray = ["email", "token"];
type FormInputs = "email" | "token";

const Signin: React.FC = () => {
  const [signinForm, setSigninForm] = React.useState<SigninProps>({
    email: '',
    token: '',
  })

  const [hasToken, setHasToken] = React.useState<boolean>(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setSigninForm(prev => ({
      ...prev,
      [name]: e.target.value
    }))
  }

  return <div className={styles.SigninContainer}>
     <section className={styles.HeaderContainer}>
      <h1>Login</h1>
    </section>
    <section className={styles.InputContainer}>
 {
          inputArray.map((input, index) => {
             return  <Input key={index} placeholder={input} type="text" value={signinForm[input as FormInputs]} onChange={handleChange}/>
          })
       }
    </section>

  <button>{hasToken ? 'Login' : "Receive Token"}</button>
  </div>
}

export default Signin;