import { Link, useNavigate } from 'react-router-dom'
import './styles.scss'

const SignIn = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/books-app')
  }

  return (
    <section className='sign-in container'>
      <div className='sign-in__header'>
        <h2 className='sign-in__header--title'>Sign in</h2>
        <Link to='/books-app/sign-up'>
          <span className='sign-in__header--text'>Sign up</span>
        </Link>
      </div>
      <form className='sign-in__form'>
        <input className='sign-in__form--input' type='email' placeholder='Enter your email' />
        <input className='sign-in__form--input' type='password' placeholder='Enter your password' />
        <button className='sign-in__form--button' onClick={goToHome}>Sign in</button>
      </form>
    </section>
  )
}

export default SignIn
