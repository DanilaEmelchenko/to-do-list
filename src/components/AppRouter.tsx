import { Routes, Route } from "react-router";
import App from "./App";
import Posts from "./Posts";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts/:userId" element={<Posts />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
