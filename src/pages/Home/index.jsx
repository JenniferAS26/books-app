import { useEffect, useState } from 'react'
import profilePicture from '../../assets/images/profile-picture.jpg'
import RecentSearch from '../../components/RecentSearch'
import CardSearch from '../../components/CardSearch'
import BookGallery from '../../components/BookGallery'
import { LuSearch } from 'react-icons/lu'
import CardBook from '../../components/CardBook'
import { getBooks } from '../../services/bookService'
import './styles.scss'

const Home = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
      .then((response) => {
        setBooks(response)
        console.log(response)
      })
  }, [])
  

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
      <RecentSearch>
      {
          books.length > 0 ? books.map((book, index) => (
            <CardSearch key={index} data={book} />
          )) : <div>Cargando... </div>
        }
        {/* <CardSearch /> */}
      </RecentSearch>
      <BookGallery>
        {
          books.length > 0 ? books.map((book, index) => (
            <CardBook key={index} data={book} />
          )) : <div>Cargando... </div>
        }
      </BookGallery>
    </section>
  )
}

export default Home
