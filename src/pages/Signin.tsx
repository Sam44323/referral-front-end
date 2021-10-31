import React from 'react';
import styles from '../styles/pages/Signin.module.scss'
import Input from '../components/Input';
import axios from '../axios/axios';

interface SigninProps{
  email: string,
  token: string,
}



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

  const receiveTokenHandler = async() => {
    const response = await axios.post('/users/email', {
      email: signinForm.email
    })
    console.log((response as any).data);
  }

  const loginHandler = async() => {
  }

  return <div className={styles.SigninContainer}>
     <section className={styles.HeaderContainer}>
      <h1>Login</h1>
    </section>
    <section className={styles.InputContainer}>
    <Input  placeholder="email" type="text" value={signinForm.email} onChange={e => handleChange(e, "email")}/>
    {hasToken && <Input  placeholder="Verification Token" type="text" value={signinForm.token} onChange={e => handleChange(e, "token")}/>}
    </section>

  <button onClick={hasToken ? loginHandler : receiveTokenHandler}>{hasToken ? 'Login' : "Receive Token"}</button>
  </div>
}

export default Signin;