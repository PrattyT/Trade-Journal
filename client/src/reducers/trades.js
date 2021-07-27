// eslint-disable-next-line
export default (trades = [], action) => {
  switch (action.type) {
    case "UPDATE":
      return trades.map((trade) =>
        trade._id === action.payload._id ? action.payload : trade
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...trades, action.payload];
    default:
      return trades;
  }
};
