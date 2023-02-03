import React, { useState } from 'react'
import { RiAccountPinCircleLine, RiArrowDownSFill } from 'react-icons/ri'
import styles from './modaldata.module.css'
export const ModalData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={styles.container}>
      <RiAccountPinCircleLine className={styles.icon__InfoData} onClick={() => setIsModalOpen(!isModalOpen)} />
      <div className={!isModalOpen ? styles.isHidden : styles.container__infoData}>
        <p className={styles.infoData__user}>Usuario: <span>userfake@example.com</span></p>
        <p className={styles.infoData__pass}>Contraseña:  <span>userpass12</span></p>
        <RiArrowDownSFill className={styles.icon__arrow} />
      </div>
    </div>
  )
}
