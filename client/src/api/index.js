import axios from "axios";

const url = "http://localhost:5000/trades";

export const fetchTrades = () => axios.get(url);

export const createTrade = (newTrade) => axios.post(url, newTrade);
