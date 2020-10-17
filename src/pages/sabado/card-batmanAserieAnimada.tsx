import React from 'react';
import imgBatmanAnimated from './images/batmanTheAnimatedSerie.jpg';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 190,
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
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Batman: A Série Animada
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              1.19 - O Profeta do Juizo Final
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              14:30 | 30min | Animação, Aventura
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        
      </Card>
      
    );
  }