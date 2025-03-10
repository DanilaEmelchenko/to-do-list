import s from "./LoadingForCreateNewPost.module.css";

const LoadingForCreateNewPost = () => {
  return (
    <div className={s["loader-container"]}>
      <span className={s.loader}></span>
    </div>
  );
};

export default LoadingForCreateNewPost;
