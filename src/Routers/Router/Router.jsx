import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Page/Home/Home/Home';
import Main from '../../layout/Main';
import Category from '../../Page/Category/Category/Category';
import News from '../../Page/News/News/News';

  export  const router = createBrowserRouter([{
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/category/:id',
                element:<Category/>
            },
            {
                path:'/news/:id',
                element:<News/>
            }
        ]
    }])
   