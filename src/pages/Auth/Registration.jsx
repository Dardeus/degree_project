import React from 'react';
import AuthForm from "../../components/AuthForm";
import styles from "./Auth.module.scss"
import {Link} from "react-router-dom";

const Registration = () => {
  return (
      <div className={styles.root}>
        <h1>Регистрация</h1>
        <AuthForm regLog={"registration"}/>
        <Link to='/auth'
              className={styles.link}
        >
          Назад ко входу
        </Link>
      </div>
  )
}

export default Registration