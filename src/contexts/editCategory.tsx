import { createContext, useState } from 'react'

export type EditCategoryContextType = {
  category: {
    name: string
    description: string
    id: number
  }
  setCategory: React.Dispatch<
    React.SetStateAction<{
      name: string
      description: string
      id: number
    }>
  >
}

interface EditCategoryContextProps {
  children: JSX.Element | JSX.Element[]
}

export const context = createContext<EditCategoryContextType | null>(null)

const EditCategoryContext = ({ children }: EditCategoryContextProps) => {
  const [category, setCategory] = useState({ name: '', description: '', id: 0 })
  return (
    <context.Provider value={{ category: category, setCategory: setCategory }}>
      {children}
    </context.Provider>
  )
}

export default EditCategoryContext
