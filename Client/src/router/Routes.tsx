import { createBrowserRouter } from "react-router"
import App from "../layout/App";
import HomePage from "../features/home/HomePage";
import ActivityDashboard from "../activities/dashboard/ActivityDashboard";
import ActivityForm from "../activities/form/ActivityForm";
import ActivityDetail from "../activities/details/ActivityDetail";
export const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {path:'',element:<HomePage/>},
            {path:'activities',element:<ActivityDashboard/>},
            {path:'activities/:id',element:<ActivityDetail/>},
            {path:'createActivity',element:<ActivityForm key='create'/>},   
            {path:'manage/:id',element:<ActivityForm/>}

        ]
        
    }
]);
