import Login from "./pages/login/Login.jsx";
import "./App.scss";
import Register from "./pages/register/Register.jsx";

import {
    createBrowserRouter,
    RouterProvider,
    Route, Outlet, Navigate
} from "react-router-dom";
import LeftBar from "./components/leftBar/LeftBar.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import RightBar from "./components/rightBar/RightBar.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";

function App() {
    const currentUser = true;
    const Layout = () => {
        return(
            <div>
                <NavBar/>
                <div style={{display: "flex"}}>
                    <LeftBar/>
                    <div style={{flex:6 }}>
                        <Outlet/>
                    </div>

                    <RightBar/>
                </div>
            </div>

        );
    }
    const ProtectedRoute = ({children}) => {
        if (!currentUser)
            return <Navigate to={"/login"}/>

        return children;
    }
  const router = createBrowserRouter([
    {

      path: "/",
      element:(<ProtectedRoute>
                 <Layout/>
            </ProtectedRoute>),
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/profile/:id",
                element: <Profile/>
            }
        ],
    },
    {
    path: "/login",
    element: <Login/>,
  }, {
    path: "/register",
    element: <Register/>,
  },
  ]);
  return(
  <div>
    <RouterProvider router={router} />
  </div>
);
}

export default App;
