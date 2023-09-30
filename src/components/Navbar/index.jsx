import { AiFillHome, AiOutlineHeart, AiOutlineEdit, AiOutlineUser } from 'react-icons/ai'
import './styles.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: '/',
      AuthRequired: true,
      component: <AiFillHome />,
      className: 'home-NavLink'
    },
    {
      id: 4,
      link: '/like',
      AuthRequired: true,
      component: <AiOutlineHeart />,
      className: 'like'
    },
    {
      id: 3,
      link: '/edit',
      AuthRequired: true,
      component: <AiOutlineEdit />,
      className: 'edit'
    },
    {
      id: 2,
      link: '/user-detail',
      AuthRequired: true,
      component: <AiOutlineUser />,
      className: 'user'
    },
  ]

  return (
    <footer className="footer">
        {/* <NavLink 
          className='NavLink home-NavLink'
          onClick={() => navigate('/')}
        >
          <AiFillHome />
        </NavLink>
        <NavLink className='NavLink like'>
          <AiOutlineHeart />
        </NavLink>
        <NavLink className='NavLink edit'>
          <AiOutlineEdit />
        </NavLink>
        <NavLink 
          className='NavLink user'
          onClick={() => navigate('/user-detail')}
        >
          <AiOutlineUser />
        </NavLink> */}
        {
          links.map((link, index) => (
            <NavLink 
              key={index}  
              className={`button ${link.className}`}
              to={link.link}
            >
              {link.component}
            </NavLink>
          ))
        }
    </footer>
  )
}

export default Navbar