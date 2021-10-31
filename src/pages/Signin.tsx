import React from 'react';
import styles from '../styles/pages/Signin.module.scss'
import Input from '../components/Input';

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
  </div>
}

export default Signin;