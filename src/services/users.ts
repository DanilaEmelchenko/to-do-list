import { instance } from "../config/instance";
import { IUserResponse } from "./interfaces";

export class User {
  static async fetchUsers(): Promise<IUserResponse[]> {
    const response = await instance.get<IUserResponse[]>("/users");

    return response.data;
  }
}
