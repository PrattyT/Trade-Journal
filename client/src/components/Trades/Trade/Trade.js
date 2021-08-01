import React, { useState } from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { useDispatch } from "react-redux";
import { deleteTrade, likeTrade } from "../../../actions/trades";

const Trade = ({ trade, setCurrentId }) => {
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const dispatch = useDispatch();

  const [showChart, setShowChart] = useState(false);

  const handleChart = () => {
    setShowChart(!showChart);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{trade.symbol}</h2>
      <p id="simple-modal-description">CHART HERE</p>
    </div>
  );

  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (trade.likes.length > 0) {
      return trade.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {trade.likes.length > 2
            ? `You and ${trade.likes.length - 1} others`
            : `${trade.likes.length} like${trade.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{trade.likes.length}{" "}
          {trade.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp; Like
      </>
    );
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} title={trade.symbol} />
      <div className={classes.overlay}>
        <Typography variant="h6">{trade.name}</Typography>
        <Typography variant="body2">
          {moment(trade.createdAt).fromNow()}
        </Typography>
      </div>

      {(user?.result?.googleId === trade?.creator ||
        user?.result?._id === trade.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(trade._id)}
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
          <div>
            <Button
              style={{ color: "white" }}
              size="small"
              onClick={handleChart}
              variant="outlined"
            >
              Open chart
            </Button>
            <Modal
              open={showChart}
              onClose={handleChart}
              aria-labelledby="Chart"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </div>
        </div>
      )}

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {trade.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        Symbol: {trade.symbol}
      </Typography>

      <Typography className={classes.title} variant="subtitle1" gutterBottom>
        ({trade.status}) &nbsp; Quantity: {trade.quantity}
      </Typography>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          Entry Price: {trade.entryPrice}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Entry Date: {trade.entryDate}
        </Typography>

        {trade.status === "CLOSED" && (
          <>
            <Typography variant="body1" gutterBottom>
              Exit Price: {trade.exitPrice}
            </Typography>

            <Typography variant="body1" gutterBottom>
              Exit Date: {trade.exitDate === "" ? "missing" : trade.exitDate}
            </Typography>
          </>
        )}
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
          disabled={!user?.result}
        >
          <Likes />
        </Button>

        {(user?.result?.googleId === trade?.creator ||
          user?.result?._id === trade.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deleteTrade(trade._id))}
          >
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Trade;
