import { Routes, Route } from "react-router";
import Users from "../pages/Users";
import Posts from "../pages/Posts";

enum Routers {
  Posts = "/posts/:userId",
}

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path={Routers.Posts} element={<Posts />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
