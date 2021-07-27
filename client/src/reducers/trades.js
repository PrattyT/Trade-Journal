// eslint-disable-next-line
export default (trades = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...trades, action.payload];
    default:
      return trades;
  }
};
