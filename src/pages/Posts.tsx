import { useEffect } from "react";
import { useParams } from "react-router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchPosts } from "../store/postsSlice/postsSlice";
import Loading from "../components/Loading/Loading";
import FormCreateNewPost from "../components/FormCreateNewPost/FormCreateNewPost";

const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, err } = useAppSelector((state) => state.posts);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchPosts(Number(userId)));
  }, []);

  if (loading) return <Loading />;
  if (err) return <h1>{err}</h1>;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Список постов пользователя</h1>
      <List
        sx={{
          margin: "0 auto",
          width: "100%",
          maxWidth: 1440,
          bgcolor: "background.paper",
        }}
      >
        {posts.map((post, index) => (
          <div key={post.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <span>{index + 1}.</span>
              </ListItemAvatar>
              <ListItemText primary={post.title} secondary={post.body} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
      <FormCreateNewPost />
    </>
  );
};

export default Posts;
