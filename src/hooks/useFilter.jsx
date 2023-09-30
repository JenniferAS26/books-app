import { useState } from 'react'

const useFilter = (initialValue = {}) => {
  const [filters, setFilters] = useState(initialValue)
  const [filterResult, setFilterResult] = useState([])
  const [responseFilter, setResponseFilter] = useState('')

  const handleFilter = (event, bookList) => {
    const { name, value } = event['target']
    const filterParams = {
      ...filters,
      [name]: value
    } 

    let filtered = [...bookList]
    for (const key in filterParams) {
      if (filterParams[key]) {
        const filteredResult = !isNaN(filterParams[key]) ? filtered.filter(({ book }) => book[key] <= filterParams[key]) : filtered.filter(({ book }) => book[key] == filterParams[key])
        filtered = [...filteredResult]
      }
    }

    setFilters(filterParams)
    setFilterResult(filtered)
    setResponseFilter(() => filtered.length ? '' : 'No se encontraron resultados')
  }

  return { filters, filterResult, responseFilter, handleFilter }
}

export default useFilter