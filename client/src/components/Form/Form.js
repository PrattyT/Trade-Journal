import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createTrade, updateTrade } from "../../actions/trades";

const Form = ({ currentId, setCurrentId }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var date = yyyy + "-" + mm + "-" + dd;
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(user);
  const dispatch = useDispatch();

  const [tradeData, setTradeData] = useState({
    status: "OPEN",
    symbol: "XYZ",
    entryDate: date,
    entryPrice: "0",
    exitPrice: "0",
    exitDate: date,
    notes: "",
    quantity: "0",
    tags: "",
  });

  const trade = useSelector((state) =>
    currentId ? state.trades.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (trade) setTradeData(trade);
  }, [trade]);

  console.log(currentId);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tradeData);

    if (currentId) {
      dispatch(
        updateTrade(currentId, { ...tradeData, name: user?.result?.name })
      );
    } else dispatch(createTrade({ ...tradeData, name: user?.result?.name }));
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Sign in to Create Trades
        </Typography>
      </Paper>
    );
  }

  const clear = () => {
    setCurrentId(null);
    setTradeData({
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
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "New"} Trade
        </Typography>
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
          name="exitPrice"
          variant="outlined"
          label="Exit Price"
          fullWidth
          value={tradeData.exitPrice}
          onChange={(e) =>
            setTradeData({ ...tradeData, exitPrice: e.target.value })
          }
        />
        <TextField
          type="quantity"
          name="quantity"
          variant="outlined"
          label="Quantity"
          fullWidth
          value={tradeData.quantity}
          onChange={(e) =>
            setTradeData({ ...tradeData, quantity: e.target.value })
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
          type="date"
          name="exitDate"
          variant="outlined"
          label="Exit Date"
          fullWidth
          value={tradeData.exitDate}
          onChange={(e) =>
            setTradeData({ ...tradeData, exitDate: e.target.value })
          }
        />
        <TextField
          name="notes"
          variant="outlined"
          label="Notes"
          fullWidth
          value={tradeData.notes}
          onChange={(e) =>
            setTradeData({ ...tradeData, notes: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (separated by comma)"
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
