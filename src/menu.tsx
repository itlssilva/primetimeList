import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

import Sabado from './pages/sabado';
import Domingo from './pages/domingo';
import Segunda from './pages/segunda';
import { eventNames } from "cluster";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      background: '#eeeeee',
    },
  }),
);

function AppRouter() {
  const classes = useStyles();  

  return (
    <Router>
      <div className={classes.root}>
        <Button variant="contained" href="/">Home</Button>
        <Button variant="contained" color="primary" href="/sabado">Sábado</Button>
        <Button variant="contained" color="primary" href="/domingo">Domigo</Button>
        <Button variant="contained" color="secondary" href="/segunda">Segunda</Button>
        <Route path="/" />
        <Route path="/sabado/" component={Sabado} />
        <Route path="/domingo/" component={Domingo} />
        <Route path="/segunda/" component={Segunda} />
      </div>
    </Router>
  );
}

export default AppRouter;