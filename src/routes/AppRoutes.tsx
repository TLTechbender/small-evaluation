import React from 'react';
import ComingSoonPage from '../pages/ComingSoonPage';
import Homepage from '../pages/Homepage';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Layout from './Layout';



const router = createBrowserRouter([

{
    path: '/',
    element: <Layout/>,
    children: [
        {
            path: '/',
            element: <Homepage/>
        },
        
        {
            path: '/coming-soon',
            element: <ComingSoonPage/>
        }

    ]
}

])
const AppRoutes:React.FC = () => {
  return (
  <RouterProvider router={router} />
  )
}

export default AppRoutes;