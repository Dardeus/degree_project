import React, {useEffect, useState} from 'react'
import styles from './Team.module.scss'
import PersonBlock from "../../components/PersonBlock";
import alex from '../../assets/images/alex.jpg'
import elena from '../../assets/images/elena.jpg'
import stepan from '../../assets/images/stepan.jpg'
import vlad from '../../assets/images/vlad.jpg'


const Team = () => {
  const [ active, setActive ] = React.useState(0);
  const names = [
    { title: "Работа над туром", name: "Конюхов Алексей", photo: alex, content: 'London is the capital city of England.' },
    { title: "3D художник", name: "Елена Ревенко", photo: elena, content: 'Paris is the capital of France.' },
    { title: "Гейм-дизайн", name: "Степан Цисельский", photo: stepan, content: 'Tokyo is the capital of Japan.' },
    { title: "Frontend-разработчик", name: "Владислав Трюфилькин", photo: vlad, content: 'Tokyo is the capital of Japan.' },
  ];
  const openTab = e => setActive(+e.target.dataset.index);

  return (
      <div className={styles.root}>
        <h1> Команда </h1>
        <div className={styles.tab}>
          {names.map((n, i) => (
              <button
                  className={i === active ? styles.focused : ' '}
                  onClick={openTab}
                  data-index={i}
              >{n.title}</button>
          ))}
        </div>
        {names[active] && <PersonBlock {...names[active]} />}
      </div>
  )
}

export default Team
