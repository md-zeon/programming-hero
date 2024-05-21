import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import './index.css'
import ErrorPage from './Components/ErrorPage.jsx';
import Categories from './Components/Categories.jsx';
import CategoryDetails from './Components/CategoryDetails.jsx';
import RandomMeals from './Components/RandomMeals.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/categories",
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Categories />,
      },
      {
        path: "/categories/:categoryId",
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryId}`),
        element: <CategoryDetails />,
      },
      {
        path: "/random-meals",
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/random.php'),
        element: <RandomMeals />,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
