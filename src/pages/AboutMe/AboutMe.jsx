import React from 'react'
import styles from './about-me.module.css'
export const AboutMe = () => {
  return (
    <div className={styles.about__container}>
      <h3>Mi Proyecto</h3>
      <p className={styles.about__description}>Proyecto para aprender hacer un Aplicacion <strong>Full Stack</strong>! <br />
        Por parte del Front End use React su routing React Router y Redux Para el manejo de estados, Por parte del Back End use node y su entorno de desarrollo Express, Express Router.<br /> Use Postgres Como Base de Datos y sequalize como mi ORM.
      </p>
      <p>By Matias Cabrera 2023</p>
    </div>
  )
}
