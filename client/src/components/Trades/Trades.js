import React from "react";
import Trade from "./Trade/Trade";
import { Grid, CircularProgress } from "@material-ui/core";

import useStyles from "./styles";

import { useSelector } from "react-redux";

const Trades = ({ setCurrentId }) => {
  const trades = useSelector((state) => state.trades);
  const classes = useStyles();
  console.log(trades);
  return !trades.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.contaier}
      container
      alignItes="stretch"
      spacing={3}
    >
      {trades.map((trade) => (
        <Grid key={trade._id} item xs={12} sm={6}>
          <Trade trade={trade} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Trades;
