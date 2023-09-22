import TextField from '../textField/TextField'
import Button from '../button/Button'
import { useContext } from 'react'
import { EditCategoryContextType, context } from '../../contexts/editCategory'
import { updateCategory } from '../../services/categories/categories'
import {
  StyledCloseBtn,
  StyledCloseBtnIcon,
  StyledEditCategoryForm,
} from './editCategoryFormStyles'

interface editCategoryFormProps {
  visibility: boolean
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const EditCategoryForm = ({
  visibility,
  setVisibility,
}: editCategoryFormProps) => {
  const { category, setCategory } = useContext(
    context
  ) as EditCategoryContextType
  return (
    <StyledEditCategoryForm
      $visibility={visibility}
      onSubmit={async (e) => {
        e.preventDefault()
        await updateCategory(category)
        window.alert('categoria atualizada com sucesso')
        window.location.reload()
      }}
    >
      <StyledCloseBtn
        type="button"
        onClick={() => {
          setVisibility(false)
        }}
      >
        <StyledCloseBtnIcon
          src="../../../public/imgs/close_icon.svg"
          alt="A image of an X, working as a close icon"
        />
      </StyledCloseBtn>
      <TextField
        placeholder="Nome"
        value={category.name}
        onChange={(e) => {
          setCategory((prevVal) => ({ ...prevVal, name: e.target.value }))
        }}
      ></TextField>
      <TextField
        placeholder="Descrição"
        value={category.description}
        onChange={(e) => {
          setCategory((prevVal) => ({
            ...prevVal,
            description: e.target.value,
          }))
        }}
      ></TextField>
      <Button type="submit">Salvar</Button>
    </StyledEditCategoryForm>
  )
}

export default EditCategoryForm
