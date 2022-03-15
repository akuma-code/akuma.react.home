import PostIdPage from "../pages/PostIdPage";
import About from "../pages/About";
import Error from "../pages/Error";
import Posts from "../pages/Posts";

export const routes = [
    { path: "/about", component: <About />, exact: true },
    { path: "/posts", component: <Posts />, exact: true },
    { path: "/posts/:id", component: <PostIdPage />, exact: true },
    { path: "/error", component: <Error />, exact: true },
]