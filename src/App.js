import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Widgets from './components/Widgets/Widgets';
import Calender from './components/Calender/Calender';

function App() {
  const browserRouter=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/Navbar",
          element:<Navbar />
        },
        {
          path:"/Widgets",
          element:<Widgets />
        },
        {
          path:"/Calender",
          element:<Calender />
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;