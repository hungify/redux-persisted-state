import axiosClient from "./axiosClient";

const authApi = {
  login: async (user) => {
    const url = "auth/login";
    return axiosClient.post(url, {
      email: user.email,
      password: user.password,
    });
  },

  loginWithGoogle: (tokenId) => {
    const url = "auth/login-by-google";
    return axiosClient.post(url, {
      token: tokenId,
    });
  },

  refreshToken: (refreshToken) => {
    const url = "auth/refresh-token";
    return axiosClient.post(url, {
      refreshToken,
    });
  },
  verifyCaptcha: (response) => {
    const url = `auth/captcha?captcha=${response}`;
    return axiosClient.get(url);
  },
  loginWithFacebook: (tokenId) => {
    const url = `account/login-by-facebook?user=${tokenId}`;
  },
};

export default authApi;
