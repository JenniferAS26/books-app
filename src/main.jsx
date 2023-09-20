import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import AppRoutes from './components/AppRoutes'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
)
