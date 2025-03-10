import { Routes, Route } from "react-router";
import Users from "../pages/Users/Users";
import Posts from "../pages/Posts/Posts";

enum Path {
  Posts = "/posts",
}

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path={`${Path.Posts}/:userId`} element={<Posts />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
