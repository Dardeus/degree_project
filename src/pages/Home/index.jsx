import React from 'react'
import styles from './Home.module.scss'

const Home = () => {

  return (
      <div className={styles.root}>
        <h1>Добро пожаловать на сайт проекта "Глазами Косыгина!" Чувствуйте себя как дома!</h1>
        <iframe src="https://vk.com/video_ext.php?oid=248197315&id=456239252&hd=3"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                allowFullScreen></iframe>
      </div>
  )
}

export default Home
