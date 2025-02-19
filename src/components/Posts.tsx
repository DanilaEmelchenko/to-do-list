import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchPosts } from "../store/postsSlice/postsSlice";
import { useParams } from "react-router";

const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, err } = useAppSelector((state) => state.postsReducer);
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();
  const conversionToNumber = Number(userId);

  useEffect(() => {
    dispatch(fetchPosts(conversionToNumber));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (loading || isLoading) return <h1>Загрузка...</h1>;
  if (err) return <h1>Ошибка</h1>;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Cписок постов</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              backgroundColor: "lightGreen",
              width: "1000px",
              padding: "15px",
              borderRadius: "15px",
            }}
          >
            <h2>
              {post.id}. {post.title}
            </h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
