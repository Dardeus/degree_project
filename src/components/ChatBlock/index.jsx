import React from "react";
import styles from "./ChatBlock.module.scss";

const ChatBlock = ({item}) => {
  const date = new Date(item.createdAt)

  return(
      <div className={styles.root}>
        <h1>{item.username}</h1>
        <p>{item.text}</p>
        <time>{date.toLocaleString()}</time>
      </div>
  )
}

export default ChatBlock