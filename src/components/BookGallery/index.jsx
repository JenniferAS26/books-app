import PropTypes from 'prop-types'
import './styles.scss'

const BookGallery = ({ children }) => {
  BookGallery.propTypes = {
    children: PropTypes.element.isRequired
  }
  return (
    <section className='book-gallery-container'>
      <div className='book-gallery-container__list'>
        {/* <li className='book-gallery-container__list--options'>Popular</li>
        <li className='book-gallery-container__list--options'>Favorites</li>
        <li className='book-gallery-container__list--options'>Recomended</li> */}
        <div className='book-gallery-container__list--options'>
          <label htmlFor="">Filtrar por paginas</label>
          <input type="range" name="" id="" />
        </div>
        <div className='book-gallery-container__list--options'>
          <label htmlFor="">Filtrar por genero</label>
          <select name="" id="">
            <option value="">Todas</option>p
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