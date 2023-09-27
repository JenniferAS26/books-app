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
  const [filterResult, setFilterResult] = useState([])
  const [responseFilter, setResponseFilter] = useState('')
  const [categories, setCategories] = useState([])
  const [rangePages, setRangePages] = useState({
    min: 0,
    max: 1500,
    step : 10
  })
  const [filters, setFilters] = useState({})

  useEffect(() => {
    getBooks()
      .then((response) => {
        setBooks(response)
        const categoriesList = getCategories(response)
        setCategories(categoriesList)
        const pagesQuantity = getPagesQuantity(response)
        setRangePages({
          ...rangePages,
          pagesQuantity
        })
      })
  }, [])
  
  const getCategories = (bookList) => {
    const categoryList = bookList.map(({ book }) => book.genre)
    const categoryItems = new Set(categoryList)
    return [...categoryItems]
  }

  const getPagesQuantity = (bookList) => {
    const ranges = bookList.map(({ book }) => book.pages)
    return {
      min: Math.floor(Math.min(...ranges) / 1000) * 1000,
      max: Math.ceil(Math.max(...ranges) / 1000) * 1000
    }
  }

  const onFilter = (event) => {
    const { name, value } = event['target']
    const filterParams = {
      ...filters,
      [name]: value
    } 
    setFilters(filterParams)


    if (value) {
      let filtered = [...books]
      for (const key in filterParams) {
        if (filterParams[key]) {
          const filteredResult = key === 'pages' ? filtered.filter(({ book }) => book[key] <= filterParams[key]) : filtered.filter(({ book }) => book[key] == filterParams[key])
          filtered = [...filteredResult]
        }
      }
      setFilterResult(filtered)
      setResponseFilter(() => filtered.length ? '' : 'No se encontraron resultados')
    } else {
      setFilterResult([])
      setResponseFilter('Filtros limpiados')
    }
  }

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
      </RecentSearch>
      <BookGallery categories={categories} rangePages={rangePages} filter={onFilter} responseFilter={responseFilter}>
        {
          filterResult.length > 0 ? filterResult.map((book, index) => (
            <CardBook key={index} data={book} />
          )) :
          books.length > 0 ? books.map((book, index) => (
            <CardBook key={index} data={book} />
          )) : <div>Cargando... </div>
        }
      </BookGallery>
    </section>
  )
}

export default Home
