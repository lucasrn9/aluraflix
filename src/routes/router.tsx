import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import VideoPage from '../pages/VideoPage'
import CategoryPage from '../pages/CategoryPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/video',
    element: <VideoPage />,
  },
  {
    path: '/categoria',
    element: <CategoryPage />,
  },
])

export default router
