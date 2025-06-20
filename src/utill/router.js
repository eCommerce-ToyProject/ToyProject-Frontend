import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import NotFound from "../pages/404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Delivery from '../pages/Delivery';
import ProOrder from '../pages/ProOrder';
import Signup from '../pages/Signup';
import Myinfo from '../pages/Orderlist';
import ProDetail from '../pages/ProDetail';
import Live from "../pages/Live";
import { DeliveryProvider } from "../context/DeliveryContext";
import { SearchProvider } from "../context/SearchContext";
import { LoginProvider } from "../context/LoginContext";
import Cart from "../pages/Cart";
import SetupLive from "../pages/SetupLive";

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
                element: <LoginProvider><Login /></LoginProvider>,
            },
            {
                path: "live/:id",
                element: <LoginProvider><Live /></LoginProvider>,
            },
            {
                path: "setUpLive",
                element: <LoginProvider><SetupLive /></LoginProvider>
            },
            {
                path: "signup",
                element: <LoginProvider><Signup /></LoginProvider>,
            },
            {
              path: "cart",
              element: <LoginProvider><Cart /></LoginProvider>
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
                path: "proDetail/:id",
                element: <ProDetail />,
            },
            {
                path: "proOrder/:id",
                element: <DeliveryProvider><ProOrder /></DeliveryProvider>,
            },
        ]
    }
])