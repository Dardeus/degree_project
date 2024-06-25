import React from 'react'
import styles from './Future.module.scss'

const Future = () => {
  return (
      <div className={styles.root}>
        <iframe className="ku-embed" allow="xr-spatial-tracking; gyroscope; accelerometer"
                allowFullScreen
                src="https://kuula.co/share/collection/7KkjS?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"></iframe>
      </div>
  )
}

export default Future
