import cardImage from '../../assets/images/book.jpg'
import './styles.scss'

const CardSearch = () => {
  return (
    <section className='card-search-container'>
      <div className='card-search-container__image-container'>
        <img 
          src={cardImage} 
          alt='card image'
          className='card-search-container__image-container--image' 
        />
      </div>
      <div className='card-search-container__info'>
        <h3 className='card-search-container__info--title'>Book name</h3>
        <p className='card-search-container__info--text'>Genre</p>
      </div>
    </section>
  )
}

export default CardSearch
