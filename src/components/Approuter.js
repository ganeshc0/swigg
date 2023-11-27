import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import About from "./About";
import Contact from "./Contact";
import Cart from "./cart";
import Body from "./Body";
import ErrorElement from "./ErrorElement";
import Menu from './Menu';
// import Instamart from "./Instamart";
import { Suspense, lazy } from "react";

const Instamart =lazy(()=>import("./Instamart"))

const appRouter = createBrowserRouter ([
    {
      path:'/',
      element:<App/>,
      errorElement:<ErrorElement/>,
      children:[
        {
          path:"/",
          element:<Body />
        },
        {
          path:"About",
          element:<About />
        },
        {
          path:'/Contact',
          element:<Contact/>
      },
      {
          path:'/Cart',
          element:<Cart/>
      },
      {
        path:':id',
        element:<Menu/>
      },
      {
        path:"/Instamart",
        element:<Suspense fallback={ <h1 className="text-dander">I am instamart</h1>}><Instamart/> </Suspense>
      }

      ]
    },
   
]);

export default appRouter;