import { FormEvent, useState } from "react";
import { useParams } from "react-router";
import s from "./FormCreateNewPost.module.css";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { creatingPost } from "../../store/postsSlice/postsSlice";
import { selectLoadingForCreatingPost } from "../../store/postsSlice/selectors/postsSelectors";
import LoadingForCreateNewPost from "./shared/LoadingForCreateNewPost/LoadingForCreateNewPost";

const FormCreateNewPost = () => {
  const [newTitlePost, setTitleNewPost] = useState("");
  const [newMessageForPost, setNewMessageForPost] = useState("");
  const loading = useAppSelector(selectLoadingForCreatingPost);
  const dispatch = useAppDispatch();
  const { userId } = useParams<string>();

  const submitNewPost = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      creatingPost({
        title: newTitlePost,
        body: newMessageForPost,
        userId: Number(userId),
      })
    );
    setTitleNewPost("");
    setNewMessageForPost("");
  };

  if (loading) return <LoadingForCreateNewPost />;

  return (
    <form className={s["form-container"]} onSubmit={submitNewPost}>
      <div className={s["form-wrapper"]}>
        <label className={s["form-label"]} htmlFor="post">
          Название нового поста:
        </label>
        <input
          className={s["form-input"]}
          type="text"
          value={newTitlePost}
          onChange={(e) => setTitleNewPost(e.target.value)}
          placeholder="Введите название нового поста"
          required
        />

        <label className={s["form-label"]} htmlFor="message">
          Новое сообщение для поста:
        </label>
        <textarea
          className={s["form-textarea"]}
          value={newMessageForPost}
          onChange={(e) => setNewMessageForPost(e.target.value)}
          placeholder="Введите новое сообщение для поста"
          rows={5}
          cols={33}
          required
        ></textarea>

        <Button variant="contained" type="submit">
          Создать новый пост
        </Button>
      </div>
    </form>
  );
};

export default FormCreateNewPost;
