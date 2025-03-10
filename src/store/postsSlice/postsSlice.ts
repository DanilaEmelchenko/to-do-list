import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICreatePostArgs,
  IPostsResponse,
  Posts,
  ICreatePostResponse,
  IEditPostArgs,
  IEditPostResponse,
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

export const editPost = createAsyncThunk<IEditPostResponse, IEditPostArgs>(
  "posts/editPost",
  async (args: IEditPostArgs) => {
    const response = await Posts.editPost(args);
    return response;
  }
);

export const deletePost = createAsyncThunk<number, number>(
  "posts/deletePost",
  async (id: number) => {
    await Posts.deletePost(id);
    return id;
  }
);

interface IPostsState {
  posts: IPostsResponse[];
  loading: boolean;
  loadingForCreatingPost: boolean;
  err: string | null;
}

const initialState = {
  posts: [],
  loading: false,
  loadingForCreatingPost: false,
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
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<IPostsResponse[]>) => {
          state.posts = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.err = "Ошибка загрузки постов";
      })
      .addCase(creatingPost.pending, (state) => {
        state.loadingForCreatingPost = true;
      })
      .addCase(
        creatingPost.fulfilled,
        (state, action: PayloadAction<ICreatePostResponse>) => {
          state.posts.push(action.payload);
          state.loadingForCreatingPost = false;
        }
      )
      .addCase(creatingPost.rejected, (state) => {
        state.loadingForCreatingPost = false;
        state.err = "Ошибка создание поста";
      })
      .addCase(editPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        editPost.fulfilled,
        (state, action: PayloadAction<IEditPostResponse>) => {
          state.posts = state.posts.map((post) =>
            post.id === action.payload.id ? action.payload : post
          );
          state.loading = false;
        }
      )
      .addCase(editPost.rejected, (state) => {
        state.loading = false;
        state.err = "Ошибка редактирование поста";
      })
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<number>) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      });
  },
});

export default postsSlice.reducer;
