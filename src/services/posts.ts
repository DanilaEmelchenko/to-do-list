import { instance } from "../config/instance";

export interface IPostsResponse {
  userId: string;
  id: number;
  title: string;
  body: string;
}

export class Posts {
  static async fetchPosts(userId: number): Promise<IPostsResponse[]> {
    const response = await instance.get<IPostsResponse[]>(
      `/posts?userId=${userId}`
    );

    return response.data;
  }
}
