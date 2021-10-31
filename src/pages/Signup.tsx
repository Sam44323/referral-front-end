import React from 'react';
import styles from '../styles/pages/Signup.module.scss'

interface SignupStateProps{
  name: string,
  email: string,
  referral: string,
  privacyPolicy: boolean,
  source: "WEB_APP"
}

const Signup: React.FC = () => {
  const [signupData, setSignupData] = React.useState()

  return <div className={styles.SignupContainer}>
    <section className={styles.HeaderContainer}>
      <h1>Register Yourself</h1>
      <hr/>
      <p>Please enter the following details</p>
    </section>
    <section className={styles.InputContainer}></section>
  </div>
}

export default Signup;