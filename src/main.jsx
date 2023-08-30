import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import pages
import AboutMe from './components/pages/AboutMe.jsx';
import Contact from './components/pages/Contact.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import Resume from './components/pages/Resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Portfolio />
      },
      {
        path: '/about',
        element: <AboutMe />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
