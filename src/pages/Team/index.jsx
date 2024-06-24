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
    { title: "Гейм-дизайн", name: "Конюхов Алексей", photo: alex, content: 'London is the capital city of England.' },
    { title: "3D художник", name: "Елена Ревенко", photo: elena,
      content: 'Я долго трудилась над созданием этой модели , ' +
          'пришлось переделывать её не сколькоо раз что бы добиться нынешнего результата, ' +
          'было просмотрено не одна сотня видео роликов , и столько было сделано ошибок. ' +
          'Но не смотря на это спустя неского часов рендера и текстурирования , ' +
          'я смогла создать реалистичную и правдоподобную модель университетского парка. ' +
          'Надеюсь вам она тоже понравится.' },
    { title: "Web-разработчик", name: "Владислав Трюфилькин", photo: vlad, content: 'Tokyo is the capital of Japan.' },
    { title: "Работа над туром", name: "Степан Цисельский", photo: stepan, content: 'Tokyo is the capital of Japan.' },
  ];
  const openTab = e => setActive(+e.target.dataset.index);

  return (
      <div className={styles.root}>
        <h1> Команда </h1>
        <div className={styles.tab}>
          <div className={styles.tab_buttons}>
            {names.map((n, i) => (
                <button
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
