import React from "react";
import styles from "./PersonBlock.module.scss";

const PersonBlock = ({ name, photo, content }) => {

  return(
      <div className={styles.root}>
        <img src={photo} alt={name}/>
        <div className={styles.text}>
          <h3>{name}</h3>
          <p>{content}</p>
        </div>
      </div>
  )
}

export default PersonBlock