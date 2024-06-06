import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import MotivationPage from "./views/MotivationPage.tsx";
import BuildingHabitsPage from './views/BuildingHabitsPage.tsx';
import BreakingHabitsPage from './views/BreakingHabitsPage.tsx';
import ProgressPage from './views/ProgressPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/motivation",
    element: <MotivationPage/>
  },
  {
    path: "/building-habits",
    element: <BuildingHabitsPage/>
  },
  {
    path: "/breaking-habits",
    element: <BreakingHabitsPage/>
  },
  {
    path: "/progress",
    element: <ProgressPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
