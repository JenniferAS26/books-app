import { createContext, useState } from 'react'
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

export const AppContext = createContext({})

const AppRoutes = () => {
  const [isUserLogged, setIsUserLogged] = useState(false)
  const [userLogger, setUserLogger] = useState({})

  const globalStates = {
    isUserLogged, 
    setIsUserLogged,
    userLogger,
    setUserLogger
  }

  return (<>
    <AppContext.Provider value={globalStates} >
      <Routes>
        <Route element={<Layout />}>
          <Route element={<PrivateRoutes isAuthenticate={isUserLogged} />}>
            <Route index element={<Home />} />
            <Route path='user-detail' element={<UserDetail />} />
            <Route path='book-detail' element={<BookDetail />} />
          </Route>
        </Route>
        <Route element={<PublicRoutes isAuthenticate={isUserLogged} />} >
          <Route path='/get-started' element={<GetStarted />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  </>)
}

export default AppRoutes
