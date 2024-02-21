import { Link, Route, Routes } from "react-router-dom";
import { MenuBar } from "../../constants/menuRouters";
import { routers } from "../../constants/routers";

const AppRouter = () => {
  return <>
    <div className="flex">
    <div>
        {
          MenuBar.map(item => (
            <Link key={item.id} to={item.path}>{item.Icon}</Link>
          ))
        }
    </div>
    <div>
        <Routes>
          {
            routers.map(item => (
              <Route key={item.id} path={item.path} element={item.element}/>
            ))
          }
        </Routes>
    </div>
    </div>
  </>  
};
export default AppRouter;