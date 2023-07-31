import axios from "axios";
import router from "../router";

export default () => {
  let baseUrl = import.meta.env.VITE_APP_ROOT_BE;
  let userInfo = localStorage.getItem("userInfo") ? localStorage.getItem("userInfo") : "";
  let accessToken = userInfo ? JSON.parse(userInfo).access_token : "";
  let refreshToken = userInfo ? JSON.parse(userInfo).refresh_token : "";
  let headers = {
    "Content-Type": "application/json",
    Accept: "*/*",
    Authorization: accessToken ? `Bearer ${accessToken}` : "",
  };
  const instance = axios.create({
    baseURL: baseUrl,
    headers: headers,
  });

  instance.interceptors.request.use((config) => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
  });
  

  instance.interceptors.response.use(
    (response) => {
      if (response.data.errorCode == -1) {
        router.push("/error/500");
      }
      return response;
    },
    async (error) => {
      console.log(error)
      if (error.response.status === 401) {
        // Yêu cầu một Access Token mới bằng Refresh Token
        console.log("call refresh token ");
        try {
          const response = await axios
            .post(baseUrl + "/refreshToken", {
              refreshToken: refreshToken,
              clientId: "webapp",
            });
          localStorage.setItem("userInfo", JSON.stringify(response.data.data));
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.data.access_token;
          error.response.config.headers["Authorization"] =
            "Bearer " + response.data.data.access_token;
          return await axios.request(error.response.config);
        } catch (error_1) {
          // Xử lý trường hợp Refresh Token cũng hết hạn
          localStorage.removeItem("userInfo");
          router.push("/login");
        }
      } else if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
      } else {
        return Promise.reject(error.message);
      }
    }
  );
  return instance;
};