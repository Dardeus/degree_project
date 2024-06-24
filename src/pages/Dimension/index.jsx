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

        <p><img className={styles.cover} src={num_array[0]} alt="cover" />Grand Theft Auto: San Andreas (Гта Сан Андреас) –
          одна из частей самой популярной игры в мире, где ты попадешь в центр активно развивающихся событий и снова станешь на сторону нарушителей закона.
          Ты попадешь в новый год, где будут развиваться криминальные истории, участником которых ты и станешь.
          На этот раз ты исполнишь роль главного героя по имени Карл Джонсон, который ещё в далёком 1992 году вернулся на родину и теперь намерен ее покорить.
        </p>

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
