import TextField from '../textField/TextField'
import TextArea from '../textArea/TextArea'
import Button from '../button/Button'
import SelectField from '../selectField/SelectField'
import { useEffect, useState } from 'react'
import { getCategories } from '../../services/categories/categories'
import { postVideo } from '../../services/videos/videos'
import {
  NewCategoryButton,
  StyledFormActions,
  StyledGroup,
  StyledLink,
  StyledNewVideoForm,
} from './newVideoFormStyles'

const NewVideoForm = () => {
  const formInitialState = {
    title: '',
    description: '',
    category: 'default',
    imgSrc: '',
    videoSrc: '',
    user: '',
  }
  const [formData, setFormData] = useState(formInitialState)
  const [categories, setCategories] = useState([
    { id: 1, categoryName: '', categoryDescription: '', color: '' },
  ])
  useEffect(() => {
    const fecthData = async () => {
      const resCategories = await getCategories()
      setCategories(resCategories)
    }
    fecthData()
  }, [])
  const categoriesOptions = categories.map((category) => ({
    categoryName: category.categoryName,
    categoryId: category.id,
  }))
  return (
    <StyledNewVideoForm
      onSubmit={async (e) => {
        e.preventDefault()
        await postVideo(formData)
        window.alert('Novo video cadastrado com sucesso')
      }}
    >
      <TextField
        value={formData.title}
        onChange={(e) => {
          setFormData((prevState) => ({ ...prevState, title: e.target.value }))
        }}
        placeholder="Titulo"
      />
      <TextField
        value={formData.videoSrc}
        onChange={(e) => {
          setFormData((prevState) => ({
            ...prevState,
            videoSrc: e.target.value,
          }))
        }}
        label="Link do vídeo"
      />
      <TextField
        value={formData.imgSrc}
        onChange={(e) => {
          setFormData((prevState) => ({ ...prevState, imgSrc: e.target.value }))
        }}
        label="Link da imagem do vídeo"
      />
      <SelectField
        value={formData.category}
        onChange={(e) => {
          setFormData((prevState) => ({
            ...prevState,
            category: e.target.value,
          }))
        }}
        placeholder="Escolha uma categoria"
        options={categoriesOptions}
      />
      <TextArea
        value={formData.description}
        onChange={(e) => {
          setFormData((prevState) => ({
            ...prevState,
            description: e.target.value,
          }))
        }}
        placeholder="Descrição"
      />
      <TextField
        value={formData.user}
        onChange={(e) => {
          setFormData((prevState) => ({
            ...prevState,
            user: e.target.value,
          }))
        }}
        placeholder="Usuário"
      />
      <StyledFormActions>
        <StyledGroup>
          <Button type="submit">Salvar</Button>
          <Button
            type="reset"
            variant="gray"
            onClick={() => {
              setFormData(formInitialState)
            }}
          >
            Limpar
          </Button>
        </StyledGroup>
        <StyledLink to="/categoria">
          <NewCategoryButton>Nova Categoria</NewCategoryButton>
        </StyledLink>
      </StyledFormActions>
    </StyledNewVideoForm>
  )
}

export default NewVideoForm
