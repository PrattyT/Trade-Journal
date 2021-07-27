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

export const updateTrade = (id, trade) => async (dispatch) => {
  console.log(trade);
  try {
    const { data } = await api.updateTrade(id, trade);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTrade = (id) => async (dispatch) => {
  console.log("deleting action");
  console.log(id);

  try {
    await api.deleteTrade(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likeTrade = (id) => async (dispatch) => {
  console.log("liking action");
  console.log(id);
  try {
    const { data } = await api.likeTrade(id);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
