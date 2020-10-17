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
      height: 290,
    },
    minCardText: {
      minHeight: 101,
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
            <Typography gutterBottom variant="h5" component="h2">
              Entre Facas e Segredos
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Depois de fazer 85 anos, Harlan Thrombey, um famoso escritor de histórias policiais,
              é encontrado morto. Contratado para investigar o caso, o detetive Benoit Blanc descobre que,
              entre os funcionários misteriosos e a família conflituosa de Harlan, todos podem ser
              considerados suspeitos do crime.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              21:00 | 2h 10min | Policial, Drama
            </Typography>
          </CardContent>
        </CardActionArea>        
      </Card>
      
    );
  }