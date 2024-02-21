import { lazy } from "react";

const DashBoardPage = lazy(() => import("./Dashboard"));
const HomePage = lazy(() => import("./Home"));
const MessagePage = lazy(() => import("./Message"));
const NotificationPage = lazy(() => import("./Notification"));
const OrderPage = lazy(() => import("./Order"));
const SettingsPage = lazy(() => import("./Settings") );

export { DashBoardPage , HomePage , MessagePage , NotificationPage , OrderPage , SettingsPage }