import React from 'react';
import imgMovie1 from './images/imgMovie1.jpg';


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
      height: 233,
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
            <Typography gutterBottom variant="h5" component="h2">
              Angry Birds 2 - O Filme
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Os raivosos passarinhos que não voam e os porquinhos conspiradores levam sua briga 
              para outro nível quando surge uma nova ameaça que coloca ambas as Ilhas dos Porcos e 
              dos Pássaros em perigo.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              15:00 | 1h 37min | Animação, Aventura
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