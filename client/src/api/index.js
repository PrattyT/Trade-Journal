import axios from "axios";

//const url = "https://tradel.herokuapp.com/trades";

const url = "http://localhost:5000/trades";

export const fetchTrades = () => axios.get(url);

export const createTrade = (newTrade) => axios.post(url, newTrade);

export const updateTrade = (id, updatedTrade) =>
  axios.patch(`${url}/${id}`, updatedTrade);

export const deleteTrade = (id) => axios.delete(`${url}/${id}`);

export const likeTrade = (id) => axios.patch(`${url}/${id}/likeTrade`);
