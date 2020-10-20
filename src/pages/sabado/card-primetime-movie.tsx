import React from 'react';
import primeMovie from '../../shared/the-movies.png';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      maxWidth: 800,
    },
    media: {
      height: 182,
    },
    minCardText: {
      minHeight: 143,
    },
  });

  export default function Serie1Card() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= { primeMovie }
            title="Contemplative Reptile"
          />
          <CardContent className={classes.minCardText}>
            <Typography gutterBottom variant="h6" component="h2">
              Título do Filme
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Sinopse do Filme.
            </Typography>
          </CardContent>
        </CardActionArea>  
        <CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            21:00 | 2h 00min | Policial, Drama
          </Typography>
        </CardActions>       
      </Card>      
    );
  }