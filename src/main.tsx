import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './pages/layout'
import { UserList } from './pages/user-list'
import { AddUser } from './pages/add-user'
import { EditUser } from './pages/edit-user'


const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
      {path: "", element: <UserList/>},
      {path: "add", element: <AddUser/>},
      {path: "user/:id", element: <EditUser/>}
    ] 
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
