import React, {useEffect} from 'react';
import AuthForm from "../../components/AuthForm";
import styles from "./Auth.module.scss"
import {Link} from "react-router-dom";
import {setLogIn} from "../../redux/slices/authState";
import {useDispatch} from "react-redux";


const Auth = ({setActiveChapter}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLogIn(false))
  }, []);

  return (<div className={styles.root}>
    <h1>Вход в систему</h1>
    <AuthForm regLog="login"/>
    <Link to='/auth/registration'
          className={styles.link}
    >
      Зарегистрировать аккаунт
    </Link>
  </div>)
}

export default Auth