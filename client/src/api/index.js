import axios from "axios";

const url = "http://localhost:5000/trades";

export const fetchTrades = () => axios.get(url);

export const createTrade = (newTrade) => axios.post(url, newTrade);

export const updateTrade = (id, updatedTrade) =>
  axios.patch(`${url}/${id}`, updatedTrade);
