import { useNavigate } from 'react-router-dom'
import './styles.scss'

const CardBook = ({ data }) => {
  const navigate = useNavigate()

  return (
    <div 
      className='card-book-container'
      onClick={() => navigate('/book-detail')}
    >
      <img 
        className='card-book-container__image' 
        src={data.book.cover} alt={data.book.title} 
      />
      <p className='card-book-container__text'>{data.book.author.name}</p>
      <h2 className='card-book-container__title'>{data.book.title}</h2>
    </div>
  )
}

export default CardBook
