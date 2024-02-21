import { DashBoardPage, HomePage, MessagePage, OrderPage, SettingsPage } from "../pages";

export const routers = [
    {
        id: 1,
        path: "/home",
        element: <HomePage/>
    },
    {
        id: 2,
        path: "/skid",
        element: <HomePage/>
    },
    {
        id: 3,
        path: "/piece",
        element: <DashBoardPage/>
    },
    {
        id: 4,
        path: "/mail",
        element: <MessagePage/>
    },
    {
        id: 5,
        path: "/settings",
        element: <SettingsPage/>
    },
    {
        id: 6,
        path: "/exit",
        element: <OrderPage/>
    }
]