import { useState } from "react"

const useForm = (initialValues = {}) => {
  const [dataForm, setDataForm] = useState({})

  const handleChangeInput = (event) => {
    const { name, value } = event.target
    // console.log(name, value)
    setDataForm({
      ...dataForm,
      [name]: value
    })
  }

  const reset =  () => {
    setDataForm({})
  }

  return {dataForm, handleChangeInput, reset}
}

export default useForm
