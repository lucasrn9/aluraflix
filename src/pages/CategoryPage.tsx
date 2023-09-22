import { useEffect, useState } from 'react'
import Container from '../components/container/Container'
import DefaultPage from '../components/defaultPage/DefaultPage'
import Layout from '../components/layout/Layout'
import NewCategoryForm from '../components/newCategoryForm/NewCategoryForm'
import PageTitle from '../components/pageTitle/PageTitle'
import Table from '../components/table/Table'
import { getCategories } from '../services/categories/categories'
import EditCategoryForm from '../components/editCategoryForm/EditCategoryForm'
import EditCategoryContext from '../contexts/editCategory'

const CategoryPage = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      categoryName: '',
      categoryDescription: '',
      color: '',
    },
  ])
  const [editCategoryVisibility, setEditCategoryVisibility] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const resCategories = await getCategories()
      setCategories(resCategories)
    }
    fetchData()
  }, [])
  return (
    <DefaultPage>
      <Container>
        <Layout>
          <PageTitle>Nova categoria</PageTitle>
          <NewCategoryForm />
          <EditCategoryContext>
            <Table
              categories={categories}
              setEditCategoryVisibility={setEditCategoryVisibility}
            />
            <EditCategoryForm
              visibility={editCategoryVisibility}
              setVisibility={setEditCategoryVisibility}
            />
          </EditCategoryContext>
        </Layout>
      </Container>
    </DefaultPage>
  )
}

export default CategoryPage
