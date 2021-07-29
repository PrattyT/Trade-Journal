import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

import { useDispatch } from "react-redux";
import { deleteTrade, likeTrade } from "../../../actions/trades";

const Trade = ({ trade, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} title={trade.symbol} />
      <div className={classes.overlay}>
        <Typography variant="h6">{trade.creator}</Typography>
        <Typography variant="body2">
          {moment(trade.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(trade._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {trade.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        Symbol: {trade.symbol}
      </Typography>

      <Typography className={classes.title} variant="subtitle1" gutterBottom>
        ({trade.status})
      </Typography>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          Entry Price: {trade.entryPrice}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Exit Price: {trade.exitPrice}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          Notes: {trade.notes}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likeTrade(trade._id))}
        >
          <ThumbUpAltIcon fontSize="small" />
          Like &nbsp;
          {trade.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteTrade(trade._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Trade;
