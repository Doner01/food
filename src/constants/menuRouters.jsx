import {  HomeOutlined, MailOutlined, PieChartFilled, RollbackOutlined, ScissorOutlined, SettingOutlined } from "@ant-design/icons";

export const MenuBar = [
    {
        id: 1,
        title: "Home",
        Icon: <HomeOutlined/>,
        path: '/home'
    },
    {
        id: 2,
        title: "Skidka",
        Icon: <ScissorOutlined/>,
        path: '/skid'
    },
    {
        id: 3,
        title: "Piece",
        Icon: <PieChartFilled/>,
        path: '/piece'
    },
    {
        id: 4,
        title: "Email",
        Icon: <MailOutlined/>,
        path: '/mail'
    },
    {
        id: 5,
        title: "Settings",
        Icon: <SettingOutlined/>,
        path: '/settings'
    },
    {
        id: 6,
        title: "Exit",
        Icon: <RollbackOutlined/>,
        path: '/exit'
    },
]
