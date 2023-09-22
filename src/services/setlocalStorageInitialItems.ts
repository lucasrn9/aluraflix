import { categoriesDb, videosDb } from '../db'

const setLocalStorageInitialItems = () => {
  const localstorageCategories = localStorage.getItem('categories')
  const localstorageVideos = localStorage.getItem('videos')
  if (!localstorageCategories) {
    localStorage.setItem('categories', JSON.stringify(categoriesDb))
    const categoryHighestId = categoriesDb.length
    localStorage.setItem('categoryHighestId', JSON.stringify(categoryHighestId))
  }
  if (!localstorageVideos) {
    localStorage.setItem('videos', JSON.stringify(videosDb))
    const videoHighestId = videosDb.length
    localStorage.setItem('videoHighestId', JSON.stringify(videoHighestId))
  }
}

export default setLocalStorageInitialItems
