import { instance } from "../config/instance";

export interface IPosts {
  userId: string;
  id: number;
  title: string;
  body: string;
}

export class Posts {
  static async fetchPosts(userId: number): Promise<IPosts[]> {
    const response = await instance.get<IPosts[]>(`/posts?userId=${userId}`);

    return response.data;
  }
}
