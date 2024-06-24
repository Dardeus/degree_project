import React, {useEffect, useState} from 'react';
import styles from './AuthForm.module.scss'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {setLogIn, setPassword, setUsername} from "../../redux/slices/authState";
import {useDispatch, useSelector} from "react-redux";


const AuthForm = ({regLog}) => {
  const {username, password} = useSelector((state) => state.auth)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onClickLogin = async (event) => {
    event.preventDefault()

    if (username === '' || password === '') {
      setError('Empty')
      return Error
    }

    const url = new URL(`https://666806daf53957909ff6302e.mockapi.io/users`)
    url.searchParams.append('username', username);
    url.searchParams.append('password', password);

    try {
      await axios.get(
          url,
          {
            headers: {
              'content-type': `application/json`
            }
          }
      )
      dispatch(setLogIn(true))
      dispatch(setPassword(""))
      setError('')
      navigate('/')
    } catch (e) {
      dispatch(setPassword(""))
      setError("Wrong enter")
    }
  }

  const onClickRegister = async (event) => {
    event.preventDefault()

    if (username === '' || password === '') {
      setError('Empty')
      return Error
    }

    try {
      await axios.post(
          `https://666806daf53957909ff6302e.mockapi.io/users`,
          JSON.stringify({
            username: username,
            password: password,
          }),
          {
            headers: {
              'content-type': `application/json`
            }
          }
      )
      setError('')
      navigate('/auth')
    } catch (e) {
      dispatch(setPassword(""))
      setError("Wrong enter")
    }
  }

  return (
      <form className={styles.root}>
        <input value={username}
               onChange={(e) => dispatch(setUsername(e.target.value))}
               className={styles.input}
               placeholder='Логин'
        />
        <input value={password}
               type="password"
               onChange={(e) => dispatch(setPassword(e.target.value))}
               className={styles.input}
               placeholder='Пароль'
               autoComplete="on"
        />
        <input
            className={styles.submit}
            type="submit"
            value="Отправить"
            onClick={regLog === 'login' ? onClickLogin : onClickRegister}
        />
        {error && <p className={styles.error}>
          {regLog === 'login' ? 'Неправильный логин или пароль' : 'Заполните все поля'}
        </p>}
      </form>
  )
}

export default AuthForm