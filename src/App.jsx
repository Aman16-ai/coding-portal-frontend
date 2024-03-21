import './App.css'
import { createBrowserRouter,Router,RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import Submissions from './page/Submissions';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children : [
        {
          path:"/",
          element : <Home/>
        },
        {
          path:"/submissions",
          element : <Submissions/>
        }
      ]
    },
    
  ]);

  return (
    <>
      {/* <Navbar/> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
