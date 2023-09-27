import PropTypes from 'prop-types'
import './styles.scss'

const BookGallery = ({ children, categories, rangePages, filter }) => {
  BookGallery.propTypes = {
    children: PropTypes.element.isRequired,
    categories: PropTypes.element.isRequired, 
    rangePages: PropTypes.object.isRequired,
    filter: PropTypes.object.isRequired,
  }

  return (
    <section className='book-gallery-container'>
      <div className='book-gallery-container__list'>
        {/* <li className='book-gallery-container__list--options'>Popular</li>
        <li className='book-gallery-container__list--options'>Favorites</li>
        <li className='book-gallery-container__list--options'>Recomended</li> */}
        <div className='book-gallery-container__list--options'>
          <label htmlFor="">Filtrar por páginas</label>
          <input 
            type="range" 
            name="pages" 
            id=""
            value={filter.pages} 
            min={rangePages.min} 
            max={rangePages.max} 
            step={rangePages.step} 
            onChange={filter} />
        </div>
        <div className='book-gallery-container__list--options'>
          <label htmlFor="">Filtrar por género</label>
          <select name="genre" id="" onChange={filter} value={filter.genre}>
            <option value="">Todas</option>
            {
              categories.length 
              ? categories.map((category, index) => (<option key={index} value={category}>{category}</option>)) 
              : <></>
            }
          </select>
        </div>
      </div>
      <div className='book-gallery-container__book-card-container'>
        {children}
      </div>
    </section>
  )
}

export default BookGallery