import './styles.scss'

const CardSearch = ({ data }) => {
  return (
    <section className='card-search-container'>
      <div className='card-search-container__image-container'>
        <img 
          src={data.book.cover} 
          alt={data.book.title}
          className='card-search-container__image-container--image' 
        />
      </div>
      <div className='card-search-container__info'>
        <h3 className='card-search-container__info--title'>{data.book.title}</h3>
        <p className='card-search-container__info--text'>{data.book.genre}</p>
      </div>
    </section>
  )
}

export default CardSearch
