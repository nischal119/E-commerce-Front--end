import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Products from "../pages/products/Products";
import Header from "../components/Header";
import Mainlayout from "../layout/Mainlayout";
const loginRoutes = [
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default loginRoutes;
