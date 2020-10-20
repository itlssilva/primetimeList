import React from 'react';
import serie2 from './images/serie2.jpg';


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
      height: 192,
    },
  });

  export default function Serie1Card() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= { serie2 }
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
                The Walking Dead
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Episódio 4x9 - After
            </Typography>            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            17:45
          </Typography>
        </CardActions>        
      </Card>      
    );
  }