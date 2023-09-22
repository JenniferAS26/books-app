import { AiOutlineArrowLeft, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import coverImage from '../../assets/images/book-cover.jpg'
import './styles.scss'

const BookDetail = () => {
  return (
    <section className='book-detail-container container'>
      <div className='book-detail-container__top'>
        <div className='book-detail-container__top--header'>
          <div className='left'>
            <button>
              <AiOutlineArrowLeft />
            </button>
          </div>
          <div className='right'>
            <button>
              <AiOutlineHeart />
            </button>
            <button>
              <AiOutlineShareAlt />
            </button>
          </div>
        </div>
        <div className='book-detail-container__top--info'>
          <h1>Book title</h1>
          <h3>Author</h3>
          <p>Pusblish year: </p>
          <p>Pages</p>
          <span>1200</span>
        </div>
        <div className='book-detail-container__top--image'>
          {/* <img src={coverImage} alt='cover image' /> */}
        </div>
      </div>
      <div className='book-detail-container__bottom'>
        <div className='book-detail-container__bottom--related'>
          <div className='left'>
            <label htmlFor="books-list-related">Other books</label>
            <select name="" id="books-list-related">
              <option value="">Book 1</option>
              <option value="">Book 2</option>
            </select>
          </div>
          <div className='right'>
            <p className='right__title'>Genre</p>
            <div className='right__label'>Fantasy</div>
          </div>
        </div>
        <div className='book-detail-container__bottom--synopsis'></div>
      </div>
    </section>
  )
}

export default BookDetail
