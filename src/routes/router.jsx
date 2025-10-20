import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader:()=>fetch("/news.json"),
            },
        ]
    },
    {
        path: "/auth",
        element: <div>auth World</div>,
    },
    {
        path: "/news",
        element: <div>news World</div>,
    },
    {
        path: "/*",
        element: <div>error World</div>,
    },
]);

export default router;