import PropTypes from 'prop-types'
import './styles.scss'

const BookGallery = ({ children }) => {
  BookGallery.propTypes = {
    children: PropTypes.element.isRequired
  }
  return (
    <section className='book-gallery-container'>
      <ul className='book-gallery-container__list'>
        <li className='book-gallery-container__list--options'>Popular</li>
        <li className='book-gallery-container__list--options'>Favorites</li>
        <li className='book-gallery-container__list--options'>Recomended</li>
      </ul>
      <div className='book-gallery-container__book-card-container'>
        {children}
      </div>
    </section>
  )
}

export default BookGallery