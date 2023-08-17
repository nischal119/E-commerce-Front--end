import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const guestRoutes = [
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default guestRoutes;
