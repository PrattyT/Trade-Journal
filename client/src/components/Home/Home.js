import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Trades from "../Trades/Trades";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getTrades } from "../../actions/trades";
import useStyles from "./styles";
const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrades());
  }, [currentId, dispatch]);

  console.log(currentId);
  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Trades setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
