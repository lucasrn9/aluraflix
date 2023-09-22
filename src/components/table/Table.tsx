import {
  deleteCategory,
  getCategory,
} from '../../services/categories/categories'
import { useContext } from 'react'
import { EditCategoryContextType, context } from '../../contexts/editCategory'
import {
  StyledTable,
  StyledTableHeading,
  StyledTd,
  StyledTr,
} from './tableStyles'

interface categoryInterface {
  id: number
  categoryName: string
  categoryDescription: string
  color: string
}

interface tableProps {
  categories: categoryInterface[]
  setEditCategoryVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const Table = ({ categories, setEditCategoryVisibility }: tableProps) => {
  const { setCategory } = useContext(context) as EditCategoryContextType
  return (
    <StyledTable>
      <thead>
        <StyledTr>
          <StyledTableHeading>Nome</StyledTableHeading>
          <StyledTableHeading>Descrição</StyledTableHeading>
          <StyledTableHeading>Editar</StyledTableHeading>
          <StyledTableHeading>Remover</StyledTableHeading>
        </StyledTr>
      </thead>
      <tbody>
        {categories.map((category) => {
          return (
            <StyledTr key={category.id}>
              <StyledTd>{category.categoryName}</StyledTd>
              <StyledTd>{category.categoryDescription}</StyledTd>
              <StyledTd
                $center
                $clickable
                onClick={async () => {
                  const categoryToBeEdited = await getCategory(category.id)
                  setEditCategoryVisibility(true)
                  setCategory({
                    id: parseInt(categoryToBeEdited.id),
                    name: categoryToBeEdited.categoryName,
                    description: categoryToBeEdited.categoryDescription,
                  })
                }}
              >
                Editar
              </StyledTd>
              <StyledTd
                $center
                $clickable
                onClick={async () => {
                  await deleteCategory(category.id)
                  window.alert('categoria deletada com sucesso')
                }}
              >
                Remover
              </StyledTd>
            </StyledTr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}

export default Table
