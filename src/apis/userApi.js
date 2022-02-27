import axiosClient from "apis/axiosClient";

const userApi = {
  getAll: () => {
    const url = "users";
    return axiosClient.get(url);
  },
};

export default userApi;
