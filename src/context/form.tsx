import { createContext, FC, useState } from "react"
import axios from "axios"
import { Entity } from "../types/Entity"
import { ObjectId } from "../types/objectId"

type FormContextState = {
  isFetchingForm: boolean
  product: any
  attribute: any
  attributeSet: any
  attributeValue: any
  fetchForm: (entity: Entity, id?: ObjectId) => void
}

const initial: FormContextState = {
  isFetchingForm: false,
  product: {},
  attribute: {},
  attributeSet: {},
  attributeValue: {},
  fetchForm: () => { }
}

export const FormContext = createContext<FormContextState>(initial)
export const FormContextProvider: FC = ({ children }) => {

  const [state, setState] = useState<FormContextState>(initial)

  const clearForm = () => {
    setState(initial)
  }

  const fetchForm = async (entity: Entity, id?: ObjectId) => {
    setState({ ...state, isFetchingForm: true })

    const method = id ? "POST" : "GET"

    try {
      const response = await axios({
        method: method,
        data: {}
      })
      setState({
        ...state,
        [entity]: {
          form: response.data
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  FormContext.displayName = "Form"

  return (
    <FormContext.Provider
      value={{
        isFetchingForm: state.isFetchingForm,
        product: state.product,
        attribute: state.attribute,
        attributeSet: state.attributeSet,
        attributeValue: state.attributeValue,
        fetchForm
      }}
    >
      {children}
    </FormContext.Provider>
  )
}