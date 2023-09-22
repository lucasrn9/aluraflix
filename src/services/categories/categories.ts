interface categoryStorage {
  id: string
  categoryName: string
  categoryDescription: string
  color: string
}

interface categoryBody {
  categoryName: string
  categoryDescription: string
  color: string
}

interface categoryUpdateBody {
  name: string
  description: string
  id: number
}

export const getCategories = async () => {
  const res = localStorage.getItem('categories')
  const data: categoryStorage[] = await JSON.parse(res!)
  const categories = data.map((category) => ({
    ...category,
    id: parseInt(category.id),
  }))
  return categories
}

export const getCategory = async (id: number) => {
  const categories: categoryStorage[] = await JSON.parse(
    localStorage.getItem('categories')!
  )
  const category = categories.filter(
    (category) => parseInt(category.id) === id
  )[0]
  return category
}

export const postCategory = async (categoryBody: categoryBody) => {
  const categories = await JSON.parse(localStorage.getItem('categories')!)
  categories.push(categoryBody)
  localStorage.setItem('categories', JSON.stringify(categories))
  const currentHighestId = parseInt(localStorage.getItem('categoryHighestId')!)
  localStorage.setItem(
    'categoryHighestId',
    JSON.stringify(currentHighestId + 1)
  )
  return categories
}

export const deleteCategory = async (id: number) => {
  const res = localStorage.getItem('categories')
  const categories: categoryStorage[] = await JSON.parse(res!)
  const filteredCategories = categories.filter(
    (category) => parseInt(category.id) !== id
  )
  localStorage.setItem('categories', JSON.stringify(filteredCategories))
  return { error: false }
}

export const updateCategory = async (categoryBody: categoryUpdateBody) => {
  const res = localStorage.getItem('categories')
  const categories: categoryStorage[] = await JSON.parse(res!)
  const categoryToUpdateIndex = categories.findIndex(
    (category) => parseInt(category.id) === categoryBody.id
  )
  categories[categoryToUpdateIndex] = {
    ...categories[categoryToUpdateIndex],
    categoryName: categoryBody.name,
    categoryDescription: categoryBody.description,
  }
  localStorage.setItem('categories', JSON.stringify(categories))
  return categories[categoryToUpdateIndex]
}
