import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Principal from './Components/Principal';
import ErrorPage from './Components/Error';



const router = createBrowserRouter([
  {
  path:"/",
  element:<App />, 
  errorElement:<ErrorPage />, 
  children:[
    {
    
    }
]
},
{
  path:"/Principal",
  element:<Principal />
}
])

// const Inicio = createBrowserRouter([
//   {
//   index :true,
//   path:"/Inicio",
//   element:<Principal/>  
// }
// ])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <RouterProvider router={Inicio} /> */}
  </React.StrictMode>
);


reportWebVitals();
