import { Routes, Route } from 'react-router-dom'
import Layout from '../../components/Layout'
import Home from '../../pages/Home'
import BookDetail from '../../pages/BookDetail'
import UserDetail from '../../pages/UserDetail'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'
import GetStarted from '../../pages/GetStarted'
import NotFound from '../../pages/NotFound'

const AppRoutes = () => {
  return (<>
    <Routes>
      <Route path='/books-app/get-started' element={<GetStarted />} />
      <Route path='/books-app/sign-in' element={<SignIn />} />
      <Route path='/books-app/sign-up' element={<SignUp />} />
      <Route path='*' element={<NotFound />} />
      <Route path='book-detail' element={<BookDetail />} />
      <Route element={<Layout />}>
        <Route path='/books-app' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='user-detail' element={<UserDetail />} />
      </Route>
    </Routes>
  </>)
}

export default AppRoutes
