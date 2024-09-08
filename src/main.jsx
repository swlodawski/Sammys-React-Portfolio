import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from './Pages/Portfolio/Portfolio'
import Resume from './Pages/Resume/Resume'
import Contact from './Pages/Contact/Contact'
import AboutMe from './Pages/AboutMe/AboutMe'
import ReactDOM from "react-dom/client";
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter({
  path: "/",
  element: <App />,
  children: [
    {
      index: true,
      element: <AboutMe />
    },
    {
      index: true,
      element: <Resume />
    },
    {
      index: true,
      element: <Portfolio />
    },
    {
      index: true,
      element: <Contact />
    },
  ]
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);