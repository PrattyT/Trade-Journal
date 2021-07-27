import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createTrade } from "../../actions/trades";

const Form = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var date = yyyy + "-" + mm + "-" + dd;
  const classes = useStyles();

  const dispatch = useDispatch();

  const [tradeData, setTradeData] = useState({
    creator: "",
    status: "OPEN",
    symbol: "XYZ",
    entryDate: date,
    entryPrice: "0.00",
    exitPrice: "0.00",
    exitDate: date,
    notes: "",
    quantity: "0",
    tags: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTrade(tradeData));
  };
  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">New Trade</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={tradeData.creator}
          onChange={(e) =>
            setTradeData({ ...tradeData, creator: e.target.value })
          }
        />
        <TextField
          name="symbol"
          variant="outlined"
          label="Symbol"
          fullWidth
          value={tradeData.symbol}
          onChange={(e) =>
            setTradeData({ ...tradeData, symbol: e.target.value })
          }
        />
        <TextField
          name="entryPrice"
          variant="outlined"
          label="Entry Price"
          fullWidth
          value={tradeData.entryPrice}
          onChange={(e) =>
            setTradeData({ ...tradeData, entryPrice: e.target.value })
          }
        />
        <TextField
          type="date"
          name="entryDate"
          variant="outlined"
          label="Entry Date"
          fullWidth
          value={tradeData.entryDate}
          onChange={(e) =>
            setTradeData({ ...tradeData, entryDate: e.target.value })
          }
        />
        <TextField
          name="notes"
          variant="outlined"
          label="notes"
          fullWidth
          value={tradeData.notes}
          onChange={(e) =>
            setTradeData({ ...tradeData, notes: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          value={tradeData.tags}
          onChange={(e) =>
            setTradeData({ ...tradeData, tags: e.target.value.split(",") })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
