import { instance } from "../config/instance";

export interface IPostsResponse {
  userId: string;
  id: number;
  title: string;
  body: string;
}

export interface ICreatePostArgs {
  title: string;
  body: string;
  userId: number;
}

export interface ICreatePostResponse {
  id: number;
  title: string;
  body: string;
  userId: number;
}

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
}
