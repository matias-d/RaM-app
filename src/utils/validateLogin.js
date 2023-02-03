const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const regexPass = /\d/

function validateLogin (data) {
  const errors = {}
  if (!data.email.length) errors.email = 'El campo no debe estar vacio'
  if (!regexEmail.test(data.email)) errors.email = 'Debe ser formato email'
  if (data.email.length > 35) errors.email = 'El maximo de caracteres permitidos es 35'
  if (!regexPass.test(data.password)) errors.password = 'La contraseña debe contener almenos un numero'
  if (data.password.length < 6 || data.password.length > 10) errors.password = 'La contraseña debe contar entre 6 y 10 caracteres'

  return errors
}

export default validateLogin
