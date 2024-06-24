import React from "react";
import styles from './KosyginButton.module.scss'
import {useLocation, useNavigate} from "react-router-dom";
import kosygin from "../../assets/images/kosygin.jpg";


const KosyginButton = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
      <div className={styles.root}>
        {!pathname.startsWith('/auth')  &&
            <img onClick={() => navigate('/auth')} className={styles.image} src={kosygin} alt='kosygin'/>}
      </div>
  )
}

export default KosyginButton