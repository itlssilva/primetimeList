import React from 'react';
import imgMovie1 from '../../shared/the-movies.png';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 300,
    },
    minCardText: {
      minHeight: 280,
    },
  });

  export default function Movie1Card() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= { imgMovie1 }
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
            15:00 | 2h 00min | Animação, Aventura
          </Typography>
        </CardActions>        
      </Card>      
    );
  }