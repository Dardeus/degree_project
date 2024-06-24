import React, {Dispatch, SetStateAction, useEffect} from "react";
import styles from './Header.module.scss'
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setUsername} from "../../redux/slices/authState";


const Header = () => {
  const navigate = useNavigate()
  const {logIn} = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { pathname } = useLocation()

  useEffect(() => {
    if (!logIn) {
      dispatch(setUsername(""))
    }
  }, [logIn])

  return (
      <div className={styles.root}>
        <div className={styles.left}>
          <button
              className={styles.header_link + (pathname === "/team" ? ' ' + styles.focused : ' ')}
              onClick={() => {
                navigate('/team')
              }}
          >
            Лица проекта
          </button>
          <button
              className={styles.header_link + (pathname === "/future" ? ' ' + styles.focused : ' ')}
              onClick={() => {
                navigate('/future')
              }}
          >
            Панорама будущего
          </button>
        </div>
        <button
            className={styles.kosygin + (pathname === "/" ? ' ' + styles.focused : ' ')}
            onClick={() => {
              navigate('/')
            }}
        >
          Глазами Косыгина
        </button>
        <div className={styles.right}>
          <button
              className={styles.header_link + (pathname === "/dimension" ? ' ' + styles.focused : ' ')}
              onClick={() => {
                navigate('/dimension')
              }}
          >
            Третье измерение
          </button>
          <button
              className={styles.header_link + ' ' + styles.inactive}
          >
            Взгляд сквозь время
          </button>
        </div>
      </div>
  )
}

export default Header