import profilePicture from '../../assets/images/profile-picture.jpg'
import { LuSearch } from 'react-icons/lu'
import './styles.scss'

const Home = () => {
  return (
    <section className='home'>
      <div className='home__header'>
        <div className='home__header--text'>
          <p className='greeting'>Good day</p>
          <h3 className='username'>Username</h3>
        </div>
        <img className='home__header--image' src={profilePicture} alt='profile picture' />
      </div>
      <form className='home__search'>
        <button className='home__search--icon'>
          <LuSearch />
        </button>
        <input className='home__search--input' type='text' placeholder='Search...' />
      </form>
    </section>
  )
}

export default Home
