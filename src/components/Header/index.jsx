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
              className={styles.header_link + (pathname === "/degree_project/team" ? ' ' + styles.focused : ' ')}
              onClick={() => {
                navigate('/degree_project/team')
              }}
          >
            Лица проекта
          </button>
          <button
              className={styles.header_link + (pathname === "/degree_project/future" ? ' ' + styles.focused : ' ')}
              onClick={() => {
                navigate('/degree_project/future')
              }}
          >
            Панорама будущего
          </button>
        </div>
        <button
            className={styles.kosygin + (pathname === "/degree_project/" ? ' ' + styles.focused : ' ')}
            onClick={() => {
              navigate('/degree_project/')
            }}
        >
          Глазами Косыгина
        </button>
        <div className={styles.right}>
          <button
              className={styles.header_link + (pathname === "/degree_project/dimension" ? ' ' + styles.focused : ' ')}
              onClick={() => {
                navigate('/degree_project/dimension')
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