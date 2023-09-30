import { Routes, Route } from 'react-router-dom'
import Layout from '../../components/Layout'
import Home from '../../pages/Home'
import BookDetail from '../../pages/BookDetail'
import UserDetail from '../../pages/UserDetail'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'
import GetStarted from '../../pages/GetStarted'
import NotFound from '../../pages/NotFound'
import PrivateRoutes from '../PrivateRoutes'
import PublicRoutes from '../PublicRoutes'

const AppRoutes = () => {
  return (<>
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoutes isAuthenticate={true} />}>
          <Route index element={<Home />} />
          <Route path='user-detail' element={<UserDetail />} />
          <Route path='book-detail' element={<BookDetail />} />
        </Route>
        <Route element={<PublicRoutes isAuthenticate={true} />} >
          <Route path='/get-started' element={<GetStarted />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  </>)
}

export default AppRoutes
