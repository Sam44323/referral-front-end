import React from 'react';
import styles from '../styles/components/Input.module.scss';

interface InputProps{
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

const Input: React.FC<InputProps> = (props) => {
  return <div className={styles.InputContainer}>
    <label>{props.placeholder} {props.placeholder === 'referral' && '(if-any)'}</label>
    <input type={props.type} value={props.value} onChange={e => props.onChange(e, props.placeholder)} />
  </div>
}

export default Input;