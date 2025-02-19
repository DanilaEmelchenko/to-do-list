import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPosts, Posts } from "../../services/posts";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (userId: number) => {
    const response = await Posts.fetchPosts(userId);
    return response;
  }
);

interface PostsState {
  posts: IPosts[];
  loading: boolean;
  err: string | null;
}

const initialState = {
  posts: [],
  loading: false,
  err: null,
} satisfies PostsState as PostsState;

// Then, handle actions in your reducers:
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchPosts.pending, (state) => {
        // Add user to the state array
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        // Add user to the state array
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state) => {
        // Add user to the state array
        state.loading = false;
        state.err = "Ошибка загрузки постов";
      });
  },
});

// Later, dispatch the thunk as needed in the app
export default postsSlice.reducer;
