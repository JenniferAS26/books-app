import { Link } from 'react-router-dom'
import '../SignIn/styles.scss'

const SignUp = () => {

  return (
    <section className='sign-in container'>
      <div className='sign-in__header'>
        <h2 className='sign-in__header--title'>Sign up</h2>
        <Link to='/sign-in'>
          <span className='sign-in__header--text'>Sign in</span>
        </Link>
      </div>
      <form className='sign-in__form'>
        <input className='sign-in__form--input' type='text' placeholder='Enter your name' />
        <input className='sign-in__form--input' type='email' placeholder='Enter your email' />
        <input className='sign-in__form--input' type='password' placeholder='Enter your password' />
        <button className='sign-in__form--button'>Sign up</button>
      </form>
    </section>
  )
}

export default SignUp
