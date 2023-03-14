import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup"
import Feed from "./Feed";
import NotFound from "./NotFounded";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Feed />,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);


export default router