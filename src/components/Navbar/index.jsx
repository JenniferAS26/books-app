import { AiFillHome, AiOutlineHeart, AiOutlineEdit, AiOutlineUser } from 'react-icons/ai'
import './styles.scss'

const Navbar = () => {
  return (
    <footer className="footer">
      <div className="footer__sections left">
        <button className='button home-button'>
          <AiFillHome />
        </button>
        <button className='button like'>
          <AiOutlineHeart />
        </button>
      </div>
      <div className="footer__sections right">
        <button className='button edit'>
          <AiOutlineEdit />
        </button>
        <button className='button user'>
          <AiOutlineUser />
        </button>
      </div>
    </footer>
  )
}

export default Navbar