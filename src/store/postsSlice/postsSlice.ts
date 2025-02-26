import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ICreatePostArgs,
  IPostsResponse,
  Posts,
  ICreatePostResponse,
} from "../../services/posts";

export const fetchPosts = createAsyncThunk<IPostsResponse[], number>(
  "posts/fetchPosts",
  async (userId: number) => {
    const response = await Posts.fetchPosts(userId);
    return response;
  }
);

export const creatingPost = createAsyncThunk<
  ICreatePostResponse,
  ICreatePostArgs
>("posts/creatingPost", async (args: ICreatePostArgs) => {
  const response = await Posts.creatingPost(args);
  return response;
});

interface IPostsState {
  posts: IPostsResponse[];
  loading: boolean;
  err: string | null;
}

const initialState = {
  posts: [],
  loading: false,
  err: null,
} satisfies IPostsState as IPostsState;

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.err = "Ошибка загрузки постов";
      })
      .addCase(creatingPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(creatingPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.loading = false;
      })
      .addCase(creatingPost.rejected, (state) => {
        state.loading = false;
        state.err = "Ошибка создание поста";
      });
  },
});

export default postsSlice.reducer;
