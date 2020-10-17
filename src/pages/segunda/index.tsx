import React from 'react';
// import Movie1Card from './card-movie1';
// import Serie1 from './card-serie1';
// import Serie2 from './card-serie2';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        marginTop10: {
            marginTop: 10,
        },
        root: {
            flexGrow: 1,
            background: '#eeeeee',
        },
        paperTitulo: {
            padding: theme.spacing(2),
            textAlign: 'center',
            background: '#ff3d00',
            color: 'white',
        },
    }),
);

const dia = `19 de Outubro`;

export default function DomingoList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <Paper className={classes.paperTitulo}>
                            <Typography variant="h4" component="h2">Segunda - {dia}</Typography>
                        </Paper>
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                        <div><Movie1Card /></div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div><Serie1 /></div>
                        <div className={classes.marginTop10}><Serie2 /></div>
                    </Grid> */}
                    {/* <Grid item xs={12} sm={6}>
                        <div><LegoCard /></div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div><Serie1 /></div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div><Serie2 /></div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div><Serie3 /></div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <div><PrimeMovie /></div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div><PrimeSerie1 /></div>
                    </Grid> */}
                </Grid>
            </Container>
        </div>

    );
}