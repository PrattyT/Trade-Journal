import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
//const url = "https://tradel.herokuapp.com/trades";

export const fetchTrades = () => API.get("/trades");

export const createTrade = (newTrade) => API.post("/trades", newTrade);

export const updateTrade = (id, updatedTrade) =>
  API.patch(`/trades/${id}`, updatedTrade);

export const deleteTrade = (id) => API.delete(`trades/${id}`);

export const likeTrade = (id) => API.patch(`/trades/${id}/likeTrade`);

// AUTH
export const signin = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);
