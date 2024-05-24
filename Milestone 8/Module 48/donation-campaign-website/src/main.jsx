import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Home from './components/Home/Home.jsx';
import CardDetails from './components/CardDetails/CardDetails.jsx';
import Donations from './components/Donations/Donations.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/card-details/:cardId",
        loader: () => fetch('../donations.json'),
        element: <CardDetails />,
      },
      {
        path: "/donation",
        loader: () => fetch('../donations.json'),
        element: <Donations />,
      },
      {
        path: "/statistics",
        loader: () => fetch('../donations.json'),
        element: <Statistics />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
