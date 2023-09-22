import { useNavigate } from 'react-router-dom'
import bookImage from '../../assets/images/book-card-image.jpeg'
import './styles.scss'

const CardBook = () => {
  const navigate = useNavigate()

  return (
    <div 
      className='card-book-container'
      onClick={() => navigate('/book-detail')}
    >
      <img className='card-book-container__image' src={bookImage} alt='book poster' />
      <p className='card-book-container__text'>Author name</p>
      <h2 className='card-book-container__title'>Book name</h2>
    </div>
  )
}

export default CardBook
