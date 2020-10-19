import React from 'react';
import Movie1Card from './card-movie1';
import ThundercatsCard from './card-thundercats';
import BatmanAnimatedCard from './card-batmanAserieAnimada';
import Serie1 from './card-serie1';
import Serie2 from './card-serie2';
import Serie3 from './card-serie3';
import PrimeMovie from './card-primetime-movie';
import PrimeSerie1 from './card-primetime-serie1';

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

const dia = `24 de Outubro`;

export default function SabadoList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paperTitulo}>
                        <Typography variant="h4" component="h2">Sábado - {dia}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div><ThundercatsCard /></div>
                    <div className={classes.marginTop10}><BatmanAnimatedCard /></div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div><Movie1Card /></div>
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
                </Grid>
            </Grid>
        </div>
    );
}