import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Page/Home/Home/Home';
import Main from '../../layout/Main';
import Category from '../../Page/Category/Category/Category';
import News from '../../Page/News/News/News';

  export  const routers = createBrowserRouter([{
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/category/:id',
                element:<Category/>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<News/>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }])
   