import React from 'react';
import serie1 from './images/serie1.jpg';


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
      height: 125,
    },
    minCardText: {
      height: 55,
    },
  });

  export default function Serie1Card() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= { serie1 }
            title="Contemplative Reptile"
          />
          <CardContent className={classes.minCardText}>
            <Typography gutterBottom variant="h6" component="h2">
                The Walking Dead
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Episódio 4x5 - Internment
            </Typography>            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            17:00
          </Typography>
        </CardActions>        
      </Card>      
    );
  }