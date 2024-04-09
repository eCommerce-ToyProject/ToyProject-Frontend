import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import NotFound from "../pages/404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Delivery from '../pages/Delivery';
import ProOrder from '../pages/Pro_order';
import Signup from '../pages/Signup';
import Myinfo from '../pages/Orderlist';
import ProDetail from '../pages/Pro_detail';
import { DeliveryProvider } from "../context/DeliveryContext";
import { SearchProvider } from "../context/SearchContext";
import { AuthProvider } from "../context/AuthContext";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <SearchProvider><Home /></SearchProvider>,
            },
            {
                path: "login",
                element: <AuthProvider><Login /></AuthProvider>,
            },
            {
                path: "signup",
                element: <AuthProvider><Signup /></AuthProvider>,
            },
            {
                path: "myinfo",
                children: [
                    {
                        path: "orderlist",
                        element: <Myinfo />,
                    },
                    {
                        path: "delivery",
                        element: <DeliveryProvider><Delivery /></DeliveryProvider>,
                    },
                ]
            },
            {
                path: "productdetail/:id",
                element: <ProDetail />,
            },
            {
                path: "productorder/:id",
                element: <DeliveryProvider><ProOrder /></DeliveryProvider>,
            },
        ]
    }
])