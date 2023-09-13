import Login from "./pages/login/Login.jsx";
import "./App.scss";
import Register from "./pages/register/Register.jsx";
import {
  createBrowserRouter,
    RouterProvider,
    Route
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([{
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
