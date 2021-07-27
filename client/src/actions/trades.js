import * as api from "../api";

// action creators

export const getTrades = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTrades();
    console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTrade = (trade) => async (dispatch) => {
  try {
    const { data } = await api.createTrade(trade);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
