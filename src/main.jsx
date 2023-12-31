import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/AppRoutes'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/books-app'>
    <AppRoutes />
  </BrowserRouter>,
)
