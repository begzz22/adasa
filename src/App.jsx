import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import BlogDetails from "./components/BlogDetails/BlogDetails";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path:"", element: <Home /> },
      { path:"home", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "about", element: <About /> },
      { path: "blog/:slug", element: <BlogDetails/> },
      { path: "*", element: <Error /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
