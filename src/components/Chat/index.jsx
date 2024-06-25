import React, {useEffect, useState} from "react";
import styles from './Chat.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchMessages} from "../../redux/slices/chatState";
import ChatBlock from "../ChatBlock";
import axios from "axios";
import send from '../../assets/images/send.png'


const Chat= () => {
  const {items} = useSelector((state) => state.chat)
  const {username} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)

  const getMessages = async () => {
    const url = new URL('https://666806daf53957909ff6302e.mockapi.io/comments');

    dispatch(fetchMessages(url.toString()))
  }

  const [message, setMessage] = useState('')
  const onClickSqueeze = async () => {
    try {
      await axios.post(
          `https://666806daf53957909ff6302e.mockapi.io/comments`,
          JSON.stringify({
            username: username === '' ? 'Абитуриент' : username,
            text: message,
            createdAt: new Date().toISOString(),
          }),
          {
            headers: {
              'content-type': `application/json`
            }
          }
      )
      getMessages()
      setLoaded(true)
      setMessage('')
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getMessages()
    setLoaded(true)
  }, []);

  useEffect(() => {
    if (items.length > 1 || loaded) {
      const timeNow = Date.now()
      const filtered = items.filter((obj) => (timeNow - new Date(obj.createdAt).getTime())/1000/60/60 > 12)

      if (filtered.length > 0) {
        try {
          filtered.map(async (obj) =>
              await axios.delete(`https://666806daf53957909ff6302e.mockapi.io/comments/${obj.id}`))
        } catch (e) {
          console.log(e)
        }
        setLoaded(false)
      }
    }
  }, [items]);

  return (
      <div className={styles.root}>
        <div className={styles.sendMessage}>
          <input value={message}
                 onChange={(e) => setMessage(e.target.value)}
                 className={styles.input}
                 placeholder='Введите сообщение'
          />
          <img onClick={onClickSqueeze} className={styles.send} src={send} alt='add'/>
        </div>
        {items.map((obj, i) => <ChatBlock key={i} item={obj}/>)}
      </div>
  )
}

export default Chat