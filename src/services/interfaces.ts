export interface IUserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

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
