
import React from 'react'
import styles from "./heading.module.css";

export default function SecondaryHeading({title, size}) {
  return (
    <h2 className={styles.heading} style={{fontSize:size}}>{title}</h2>
  )
}
