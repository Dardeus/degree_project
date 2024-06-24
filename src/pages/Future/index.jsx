import React, {useEffect, useState} from 'react'
import styles from './Future.module.scss'

const Future = () => {
  return (
      <div className={styles.root}>
        <iframe className="ku-embed" frameBorder="0" allow="xr-spatial-tracking; gyroscope; accelerometer"
                allowFullScreen scrolling="no"
                src="https://kuula.co/share/collection/7KkjS?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"></iframe>
      </div>
  )
}

export default Future
