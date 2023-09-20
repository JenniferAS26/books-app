import PropTypes from 'prop-types'
import './styles.scss'

const RecentSearch = ({ children }) => {
  RecentSearch.propTypes = {
    children: PropTypes.element.isRequired
  }
  return (
    <section className='recent-search-container'>
      <h3 className='recent-search-container__title'>Recent Searched</h3>
      <div className='recent-search-container__cards-container'>
        {children}
      </div>
    </section>
  )
}

export default RecentSearch
