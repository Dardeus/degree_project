import React from 'react'
import styles from './Dimension.module.scss'

const Home = () => {
  const num_array = [...Array(8)].map((_, i) =>
      require(`../../assets/images/tour/${i+1}.png`))

  const download_link =
      'https://vk.com/doc208567886_675657434?hash=MyqDkR136Ek0YB82TbOEfKXeEB4QdRgSzzB3vR3Q02L&dl=' +
      'RrDSLG9Cb26iKUIpNzzcG6AjhJdbMFk207iLTQi48jz'

  return (
      <div className={styles.root}>
        <h1>Интерактивный 3D тур по РГУ им. А.Н. Косыгина</h1>

        <p><img className={styles.cover} src={num_array[0]} alt="cover" />
          Погрузись в студенческую жизнь вместе с интерактивным туром версии 0.1.4!
          Изучи все закоулки будущей Alma Mater и найди скрытые пасхалки!
        </p>

        <h2>Скриншоты</h2>
        <div className={styles.images}>
          {num_array.slice(1).map((n, index) => <img key={index} src={n} alt={index}/>)}
        </div>

        <a href={download_link} download={true}>
          Скачать игру по ссылке
        </a>
      </div>
  )
}

export default Home
