import React from 'react';
import imgBatmanAnimated from './images/batmanTheAnimatedSerie.jpg';


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
      height: 184,
    },
    minCardText: {
      height: 58,
    },
  });

  export default function BatmanAnimatedCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= { imgBatmanAnimated }
            title="Contemplative Reptile"
          />
          <CardContent className={classes.minCardText}>
            <Typography gutterBottom variant="h6" component="h2">
              Batman: A Série Animada
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              1.20 - Perito em Formas Humanas - 1ª Parte
            </Typography>            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            14:30 | 30min | Animação, Aventura
          </Typography>
        </CardActions>        
      </Card>      
    );
  }