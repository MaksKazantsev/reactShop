import {ADMIN_ROUTE, BASKET_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE, DEVICE_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: <DevicePage/>
    },
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    }
]