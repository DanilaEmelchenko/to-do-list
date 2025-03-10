import { useEffect, useState } from "react";
import { useParams } from "react-router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  deletePost,
  editPost,
  fetchPosts,
} from "../../store/postsSlice/postsSlice";
import Loading from "../../components/Loading/Loading";
import FormCreateNewPost from "../../components/FormCreateNewPost/FormCreateNewPost";
import ModalEditPost from "./shared/ModalEditPost/ModalEditPost";
import {
  selectLoadingPosts,
  selectPostsData,
} from "../../store/postsSlice/selectors/postsSelectors";

export interface IEditPost {
  id: number | null;
  title: string;
  message: string;
}

const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPostsData);
  const loading = useAppSelector(selectLoadingPosts);
  const { userId } = useParams<string>();
  const [editPostInputs, setEditPostInputs] = useState<IEditPost>({
    id: null,
    title: "",
    message: "",
  });
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts(Number(userId)));
  }, []);

  const clickDeletePost = (id: number): void => {
    dispatch(deletePost(id));
  };

  const clickEditPost = (
    postId: number,
    titlePost: string,
    messagePost: string
  ): void => {
    setEditPostInputs((prev) => ({
      ...prev,
      id: postId,
      title: titlePost,
      message: messagePost,
    }));
    handelModalOpen();
  };

  const saveEditPost = (): void => {
    dispatch(
      editPost({
        id: editPostInputs.id as number,
        title: editPostInputs.title as string,
        body: editPostInputs.message as string,
        userId: Number(userId),
      })
    );
    handelModalClose();
  };

  const handelModalOpen = () => setModalOpen(true);
  const handelModalClose = () => setModalOpen(false);

  if (loading) return <Loading />;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Список постов пользователя</h1>
      <List
        sx={{
          margin: "0 auto",
          width: "100%",
        }}
      >
        {posts?.map((post, index) => (
          <div key={post.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <span>{index + 1}.</span>
              </ListItemAvatar>
              <>
                <ListItemText primary={post.title} secondary={post.body} />
                <IconButton
                  aria-label="edit"
                  onClick={() => clickEditPost(post.id, post.title, post.body)}
                >
                  <ModeIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => clickDeletePost(post.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
      <ModalEditPost
        editPostInputs={editPostInputs}
        setEditPostInputs={setEditPostInputs}
        saveEditPost={saveEditPost}
        handelModalClose={handelModalClose}
        modalOpen={modalOpen}
      />
      <FormCreateNewPost />
    </>
  );
};

export default Posts;
