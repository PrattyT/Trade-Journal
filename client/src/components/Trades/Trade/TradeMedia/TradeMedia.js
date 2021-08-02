import React from "react";
import { CardMedia } from "@material-ui/core";
import useStyles from "./styles";

const TradeMedia = ({ trade }) => {
  const classes = useStyles();

  if (trade.status === "OPEN") {
    return <CardMedia className={classes.mediaOpen} title={trade.symbol} />;
  } else if (parseFloat(trade.exitPrice) >= parseFloat(trade.entryPrice)) {
    return <CardMedia className={classes.mediaWin} title={trade.symbol} />;
  } else
    return <CardMedia className={classes.mediaLoss} title={trade.symbol} />;
};

export default TradeMedia;
