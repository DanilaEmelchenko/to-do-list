import { IUserResponse } from "../../services/users";
import { IUser } from "./interfaces";

export const getUsers = (data: IUserResponse[]): IUser[] => {
  return data.map((item) => {
    const copyAddress = {
      ...item.address,
    };
    const { geo, ...deleteGeo } = copyAddress;
    const fullAddress = Object.values(deleteGeo).join(" ,");

    const fullName = [item.name, item.username].join(" ");

    return {
      id: item.id,
      fullName: fullName,
      email: item.email,
      fullAddress: fullAddress,
    };
  });
};
