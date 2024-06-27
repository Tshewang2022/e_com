import axios from "axios";
const axiosClient = axios.create({
  // if the given api is said 404, then we need to rectify the api baseURL
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
  //timeout: 1000,
  // headers: { "X-Custom-Header": "footer" },
});
export default axiosClient;
