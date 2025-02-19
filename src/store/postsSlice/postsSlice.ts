import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPostsResponse, Posts } from "../../services/posts";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (userId: number) => {
    const response = await Posts.fetchPosts(userId);
    return response;
  }
);

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
      });
  },
});

export default postsSlice.reducer;
