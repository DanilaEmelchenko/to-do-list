import { RootState } from "../store";

export const selectPostsData = (state: RootState) => state.posts.posts;
export const selectLoadingPosts = (state: RootState) => state.posts.loading;
