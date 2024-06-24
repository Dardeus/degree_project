import React from "react";
import styles from './KosyginButton.module.scss'
import {useLocation, useNavigate} from "react-router-dom";
import kosygin from "../../assets/images/kosygin.jpg";


const KosyginButton = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
      <div className={styles.root}>
        {!pathname.startsWith('/degree_project/auth')  &&
            <img onClick={() => navigate('/degree_project/auth')} className={styles.image} src={kosygin} alt='kosygin'/>}
      </div>
  )
}

export default KosyginButton