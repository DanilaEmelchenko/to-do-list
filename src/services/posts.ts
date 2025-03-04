import { instance } from "../config/instance";
import {
  IPostsResponse,
  ICreatePostArgs,
  ICreatePostResponse,
  IEditPostResponse,
  IEditPostArgs,
} from "./interfaces";

export class Posts {
  static async fetchPosts(userId: number): Promise<IPostsResponse[]> {
    const response = await instance.get<IPostsResponse[]>(
      `/posts?userId=${userId}`
    );

    return response.data;
  }

  static async creatingPost(
    args: ICreatePostArgs
  ): Promise<ICreatePostResponse> {
    const response = await instance.post<ICreatePostResponse>(`/posts`, args);

    return response.data;
  }

  static async editPost(args: IEditPostArgs): Promise<IEditPostResponse> {
    const response = await instance.put<IEditPostResponse>(
      `/posts/${args.id}`,
      args
    );

    return response.data;
  }

  static async deletePost(id: number): Promise<number> {
    await instance.delete(`/posts/${id}`);

    return id;
  }
}

export type {
  ICreatePostArgs,
  IPostsResponse,
  ICreatePostResponse,
  IEditPostArgs,
  IEditPostResponse,
};
