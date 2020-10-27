import React from 'react'
import styles from './style.css'

const Avatar = (props) => {
  let src = props.src;
  let size = props.size;

  return <img className={styles.avatar} src={src} width={size} height={size} alt="Аватар" />
}

export default Avatar;

