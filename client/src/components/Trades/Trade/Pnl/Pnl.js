import React from "react";
import { Typography } from "@material-ui/core";

const Pnl = ({ trade }) => {
  const gain = () => {
    return (trade.exitPrice - trade.entryPrice) * trade.quantity;
  };
  const percent = () => {
    const num = ((trade.exitPrice - trade.entryPrice) / trade.entryPrice) * 100;
    return Math.round((num + Number.EPSILON) * 100) / 100;
  };

  return (
    <>
      <Typography variant="body1" gutterBottom>
        Exit Price: {trade.exitPrice}
      </Typography>

      <Typography variant="body1" gutterBottom>
        Exit Date: {trade.exitDate === "" ? "missing" : trade.exitDate}
      </Typography>

      <Typography variant="body1" gutterBottom>
        Gain: ${gain()}
      </Typography>

      <Typography variant="body1" gutterBottom>
        Percent Change: {percent()} %
      </Typography>
    </>
  );
};

export default Pnl;
