import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Box, Container, Grid, Typography } from '@material-ui/core';

import Home from '../src/pages/Home/';
import Sabado from '../src/pages/sabado/';
import Domingo from './pages/domingo/';
import Segunda from '../src/pages/segunda/';
import { eventNames } from "cluster";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: '#eeeeee',
    },
    botoes: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

function AppRouter() {
  const classes = useStyles();  

  return (
    <Router>
      <div className={classes.root}>
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Box textAlign="center">
                <div className={classes.botoes}>
                  <Button variant="contained" href="/home">Home</Button>
                  <Button variant="contained" color="primary" href="/sabado">Sábado</Button>
                  <Button variant="contained" color="primary" href="/domingo">Domigo</Button>
                  {/* <Button variant="contained" color="secondary" href="/segunda">Segunda</Button>                   */}
                </div>                
              </Box>
              <Box>
                <div>
                  <Route path="/home" component={Home} />
                  <Route path="/sabado/" component={Sabado} />
                  <Route path="/domingo/" component={Domingo} />
                  {/* <Route path="/segunda/" component={Segunda} /> */}
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Router>
  );
}

export default AppRouter;