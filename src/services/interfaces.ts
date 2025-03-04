export interface IPostsResponse {
  userId: number;
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

export interface IEditPostResponse extends ICreatePostResponse {}

export interface IEditPostArgs extends ICreatePostArgs {
  id: number;
}
