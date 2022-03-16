import PostIdPage from "../pages/PostIdPage";
import About from "../pages/About";
import Error from "../pages/Error";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import Home from "../pages/Home";

export const publicRoutes = [  //? isAuth = false
    { path: "/login", component: <Login />, exact: true },
    // { path: "/about", component: <About />, exact: true },
    // { path: "/posts", component: <Posts />, exact: true },
    { path: "/", component: <Home />, exact: true },
]

export const privateRoutes = [  //? isAuth = true
    { path: "/about", component: <About />, exact: true },
    { path: "/posts", component: <Posts />, exact: true },
    { path: "/posts/:id", component: <PostIdPage />, exact: true },
    { path: "/error", component: <Error />, exact: true },
    { path: "/login", component: <Login />, exact: true },
    { path: "/", component: <Home />, exact: true },
]