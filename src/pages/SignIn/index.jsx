import { Link } from 'react-router-dom'
import './styles.scss'
import useForm from '../../hooks/useForm'
import { getUserByQueryParams } from '../../services/userService'
import { useContext } from 'react'
import { AppContext } from '../../routes/AppRoutes'

const SignIn = () => {
  const {dataForm, handleChangeInput, reset} = useForm({})
  const {setIsUserLogged, setUserLogger} = useContext(AppContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const userLogged = await getUserByQueryParams(dataForm.email, dataForm.password)
    if (userLogged) {
      setUserLogger(userLogged)
      setIsUserLogged(true)
      alert(`Bienvenido ${userLogged.name}`)
    } else {
      alert('Usuario y/o contraseña incorrectos')
    }
    reset()
  }

  return (
    <section className='sign-in container'>
      <div className='sign-in__header'>
        <h2 className='sign-in__header--title'>Sign in</h2>
        <Link to='/sign-up'>
          <span className='sign-in__header--text'>Sign up</span>
        </Link>
      </div>
      <form 
        className='sign-in__form'
        onSubmit={handleSubmit}
      >
        <input 
          className='sign-in__form--input' 
          type='email' 
          placeholder='Enter your email' 
          name='email'
          value={dataForm?.email || ''}
          onChange={handleChangeInput}
        />
        <input 
          className='sign-in__form--input' 
          type='password' 
          placeholder='Enter your password' 
          name='password'
          value={dataForm?.password || ''}
          onChange={handleChangeInput}
        />
        <button type='submit'
          className='sign-in__form--button' 
        >
          Sign in
        </button>
      </form>
    </section>
  )
}

export default SignIn
