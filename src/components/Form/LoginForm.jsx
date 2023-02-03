import React, { useState } from 'react'
import styles from './loginform.module.css'
import { RiMailLine, RiLockLine, RiErrorWarningLine } from 'react-icons/ri'
import validateLogin from '../../utils/validateLogin'
import { userEmail, userPass } from '../../utils/access'
import { useDispatch } from 'react-redux'
import { accessPermited } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import { ModalData } from '../ModalData/ModalData'
export const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState({
    email: '',
    password: '',
    dataFailed: ''
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleChange (e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

    setError(validateLogin({
      ...data,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit (e) {
    e.preventDefault()
    if (data.email === userEmail && data.password === userPass) {
      dispatch(accessPermited())
      navigate('/RaM-app/home')
    } else setError({ ...error, dataFailed: 'El email o la contraseña no es correcta, vuelve a probar' })
    setTimeout(() => {
      setError({ ...error, dataFailed: '' })
    }, 2500)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <ModalData />
        <h2 className={styles.form__title}>INICIAR <span>SESIÓN</span></h2>
        <div className={styles.container__inputEmail}>
          <input type='text' placeholder='user@gmail.com' name='email' value={data.email} onChange={(e) => handleChange(e)} className={!error.email ? styles.form__input_email : styles.input__email_error} />
          {
          !error.email
            ? <RiMailLine className={styles.input__iconEmail} />
            : <RiErrorWarningLine className={styles.data__warning} />
          }
        </div>
        {error.email && <p className={styles.info__email}>{error.email}</p>}
        <div className={styles.container__inputPass}>
          <input type='password' placeholder='*********' name='password' value={data.password} onChange={(e) => handleChange(e)} className={!error.password ? styles.form__input_password : styles.input__pass_error} />
          {
            !error.password
              ? <RiLockLine className={styles.input__iconPass} />
              : <RiErrorWarningLine className={styles.data__warning} />
          }
        </div>
        {error.password && <p className={styles.info__pass}>{error.password}</p>}
        <button type='submit' className={styles.form__btn}>Iniciar Sesión</button>
      </form>
      {
        error.dataFailed &&
          <p className={styles.data__failed}>{error.dataFailed}</p>
      }
    </>
  )
}
