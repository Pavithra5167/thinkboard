import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:5001/api"
});
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};

export default api;