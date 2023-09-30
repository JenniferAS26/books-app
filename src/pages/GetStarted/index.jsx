import { useNavigate } from 'react-router-dom'
import hero from '../../assets/images/book-cover.jpg'
// import hero from '../../assets/images/book-wallpaper.jpg'
import './styles.scss'

const GetStarted = () => {
  const navigate = useNavigate()

  const goTo = () => {
    navigate('//sign-in')
  }

  return (
    <section className='get-started container'>
      <div className='get-started__image-container'>
        <img src={hero} alt='' className="get-started__image-container--image" />
      </div>
      <h1 className='get-started__main-title'>The app to consulting your favorites books</h1>
      <button className='get-started__button' onClick={goTo}>Get Started</button>
    </section>
  )
}

export default GetStarted
