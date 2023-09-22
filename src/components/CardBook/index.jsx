import bookImage from '../../assets/images/book-card-image.jpeg'
import './styles.scss'

const CardBook = () => {
  return (
    <div className='card-book-container'>
      <img className='card-book-container__image' src={bookImage} alt='book poster' />
      <p className='card-book-container__text'>Author name</p>
      <h2 className='card-book-container__title'>Book name</h2>
    </div>
  )
}

export default CardBook
