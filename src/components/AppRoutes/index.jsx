import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../Home'
import PlantDetail from '../../pages/PlantDetail'
import UserDetail from '../../pages/UserDetail'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'
import GetStarted from '../../pages/GetStarted'
import NotFound from '../../pages/NotFound'

const AppRoutes = () => {
  return (<>
    <Routes>
      <Route path='get-started' element={<GetStarted />} />
      <Route path='sign-in' element={<SignIn />} />
      <Route path='sign-up' element={<SignUp />} />
      <Route path='*' element={<NotFound />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='plant-detail' element={<PlantDetail />} />
        <Route path='user-detail' element={<UserDetail />} />
      </Route>
    </Routes>
  </>)
}

export default AppRoutes
