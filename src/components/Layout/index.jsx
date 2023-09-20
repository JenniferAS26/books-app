import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import './styles.scss'

const Layout = () => {
  return (
    <section className='layout container'>
      <Outlet />
      <Navbar />
    </section>
  )
}

export default Layout
