import React from 'react'
import styles from './Team.module.scss'
import PersonBlock from "../../components/PersonBlock";
import alex from '../../assets/images/alex.jpg'
import elena from '../../assets/images/elena.jpg'
import stepan from '../../assets/images/stepan.jpg'
import vlad from '../../assets/images/vlad.jpg'


const Team = () => {
  const [ active, setActive ] = React.useState(0);
  const names = [
    { title: "Гейм-дизайн", name: "Конюхов Алексей", photo: alex,
      content: 'Я в восторге от нашего проекта! Особенно я рад трудностям, ' +
          'которые мне встретились мне во время работы над туром. ' +
          'Я постоянно чувствовал ,что каждое моё даже самое простое действие может изменить в проекте всё! ' +
          'Не возможно передать словами то чувство когда твоя программа начинает будто бы сама говорить с тобой, ' +
          'опережая твои собственные мысли. Отдельная благодарность создателям Юнити! ' +
          'В самые ответственные моменты разработки я чувствовал их поддержку, заставляющую меня продолжать работать!' },
    { title: "3D художник", name: "Елена Ревенко", photo: elena,
      content: 'Я долго трудилась над созданием этой модели , ' +
          'пришлось переделывать её не сколькоо раз что бы добиться нынешнего результата, ' +
          'было просмотрено не одна сотня видео роликов , и столько было сделано ошибок. ' +
          'Но не смотря на это спустя неского часов рендера и текстурирования , ' +
          'я смогла создать реалистичную и правдоподобную модель университетского парка. ' +
          'Надеюсь вам она тоже понравится.' },
    { title: "Web-разработчик", name: "Владислав Трюфилькин", photo: vlad,
      content: 'Я очень рад работать над таким полезным проектом вместе с друзьями. ' +
          'И пусть на изучение многих аспектов уходит очень много времени, результат того стоит. ' +
          'Надеюсь вам понравится наш проект!' },
    { title: "Работа над туром", name: "Степан Цисельский", photo: stepan,
      content: 'К сожалению, мне пришлось врменно покинуть проект, но тотвремя, которое я провел, ралотая над ним, ' +
          'принесло мне один из ценнейших опытов в жизни. ' +
          'Надеюсь скоро я смогу вернуться в команду и продолжить работу.' },
  ];
  const openTab = e => setActive(+e.target.dataset.index);

  return (
      <div className={styles.root}>
        <h1> Команда </h1>
        <div className={styles.tab}>
          <div className={styles.tab_buttons}>
            {names.map((n, i) => (
                <button
                    key={i}
                    className={i === active ? styles.focused : ' '}
                    onClick={openTab}
                    data-index={i}
                >{n.title}</button>
            ))}
          </div>
          <div className={styles.content}>
            {names[active] && <PersonBlock {...names[active]} />}
          </div>
        </div>
      </div>
  )
}

export default Team
