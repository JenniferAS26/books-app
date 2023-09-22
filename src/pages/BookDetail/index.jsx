import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { GiBookmark, GiNotebook } from 'react-icons/gi'
import { BsCalendarDate } from 'react-icons/bs'
import { AiOutlineNumber } from 'react-icons/ai'
import bgImage from '../../assets/images/bg-img.jpg'
import coverImage from '../../assets/images/cover.jpeg'
import './styles.scss'

const BookDetail = () => {
  const navigate = useNavigate()

  return (
    <section className='book-detail-container container'>
      <div className='book-detail-container__top'>
        <img className='book-detail-container__top--background-image' src={bgImage} alt="" />
        <div className='book-detail-container__top--header'>
          <div className='left'>
            <button 
              className='left button-style'
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft />
            </button>
          </div>
          <div className='right'>
            <button className='right button-style'>
              <AiOutlineHeart />
            </button>
            <button className='right button-style'>
              <AiOutlineShareAlt />
            </button>
          </div>
        </div>
        <div className='main-container'>
          <div className='book-detail-container__top--info'>
            <h1 className='title'>Book title</h1>
            <div className='details-wrapper details-wrapper__author'>
              <span className='item'><GiBookmark /></span>
              <h3 className='author'>  Author</h3>
            </div>
            <div className='details-wrapper details-wrapper__year'>
              <span className='item'><BsCalendarDate /></span>
              <p className='publish-year'>Pusblish year: </p>
            </div>
            <div className='details-wrapper details-wrapper__pages'>
              <span className='item'><GiNotebook /></span>
              <p className='pages'>Pages</p>
            </div>
            <div className='details-wrapper details-wrapper__pages-number'>
              <span className='item'><AiOutlineNumber /></span>
              <span className='number-pages'>1200</span></div>
          </div>
          <div className='book-detail-container__top--image'>
            <img src={coverImage} alt='cover image' />
          </div>
        </div>
      </div>
      <div className='book-detail-container__bottom'>
        <div className='book-detail-container__bottom--related'>
          <div className='left'>
            <label htmlFor='books-list-related'>Other books</label>
            <select name='' id='books-list-related'>
              <option value=''>Book 1</option>
              <option value=''>Book 2</option>
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
