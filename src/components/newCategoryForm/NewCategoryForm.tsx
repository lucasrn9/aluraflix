import Button from '../button/Button'
import ColorField from '../colorField/ColorField'
import TextArea from '../textArea/TextArea'
import TextField from '../textField/TextField'
import { useState } from 'react'
import { postCategory } from '../../services/categories/categories'
import { StyledFormActions, StyledNewCategoryForm } from './newCategoryFormStyles'



const NewCategoryForm = () => {
  const initialState = {
    categoryName: '',
    categoryDescription: '',
    color: '#ffffff',
  }
  const [formData, setFormData] = useState(initialState)
  return (
    <StyledNewCategoryForm
      onSubmit={async (e) => {
        e.preventDefault()
        await postCategory(formData)
        window.alert('Nova categoria cadastrada com sucesso')
      }}
    >
      <TextField
        placeholder="Titulo"
        value={formData.categoryName}
        onChange={(e) => {
          setFormData((prevVal) => ({
            ...prevVal,
            categoryName: e.target.value,
          }))
        }}
      />
      <ColorField
        value={formData.color}
        onChange={(e) => {
          setFormData((prevVal) => ({
            ...prevVal,
            color: e.target.value,
          }))
        }}
        label="Cor"
      />
      <TextArea
        value={formData.categoryDescription}
        onChange={(e) => {
          setFormData((prevVal) => ({
            ...prevVal,
            categoryDescription: e.target.value,
          }))
        }}
        placeholder="Descrição"
      />
      <StyledFormActions>
        <Button type="submit">Salvar</Button>
        <Button
          variant="gray"
          type="reset"
          onClick={() => {
            setFormData(initialState)
          }}
        >
          Limpar
        </Button>
      </StyledFormActions>
    </StyledNewCategoryForm>
  )
}

export default NewCategoryForm
