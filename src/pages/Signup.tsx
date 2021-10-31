import React from 'react';
import Input from '../components/Input';
import styles from '../styles/pages/Signup.module.scss'

interface SignupStateProps{
  name: string,
  email: string,
  referral: string,
  privacyPolicy: boolean,
  source: "WEB_APP",
  verification: string,
}

const inputArray = ["name", "email", "referral"];
type FormInputs = "name" | "email" | "referral";

const Signup: React.FC = () => {
  const [signupData, setSignupData] = React.useState<SignupStateProps>({
    name: "",
    email: "",
    referral: "",
    privacyPolicy: false,
    source: "WEB_APP",
    verification: "",
  })
  const [fetchedVerification, setFetchedVerification] = React.useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
  }

  return <div className={styles.SignupContainer}>
    <section className={styles.HeaderContainer}>
      <h1>Register Yourself</h1>
      <hr/>
      <p>Please enter the following details</p>
    </section>
    <section className={styles.InputContainer}>

       {
          inputArray.map((input, index) => {
             return  <Input key={index} placeholder={input} type="text" value={signupData[input as FormInputs]} onChange={handleChange}/>
          })
       }

       <div className={styles.VerificationSection} hidden={!fetchedVerification}>
       <Input type="text" placeholder="Verification Code" value={signupData.verification} onChange={handleChange}/>
       </div>
        
    </section>
  </div>
}

export default Signup;