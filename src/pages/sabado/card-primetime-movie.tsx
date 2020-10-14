import React from 'react';
import primeMovie from './images/primetimemovie.jpg';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 800,
    },
    media: {
      height: 330,
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
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                O Menino que Descobriu o Vento
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Inspirado por um livro de ciências, um garoto constrói uma turbina eólica para salvar seu vilarejo da
                fome.
                Baseado em uma história real.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                20:00 | 1h 53min | Dramas políticos
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