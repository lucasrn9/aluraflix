import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import setLocalStorageInitialItems from './services/setlocalStorageInitialItems'

function App() {
  setLocalStorageInitialItems()
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
