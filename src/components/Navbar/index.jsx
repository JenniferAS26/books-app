import { AiFillHome, AiOutlineHeart, AiOutlineEdit, AiOutlineUser } from 'react-icons/ai'
import './styles.scss'

const Navbar = () => {
  return (
    <footer className="footer">
        <button className='button home-button'>
          <AiFillHome />
        </button>
        <button className='button like'>
          <AiOutlineHeart />
        </button>
        <button className='button edit'>
          <AiOutlineEdit />
        </button>
        <button className='button user'>
          <AiOutlineUser />
        </button>
    </footer>
  )
}

export default Navbar