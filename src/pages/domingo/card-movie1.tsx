import React from 'react';
import imgMovie1 from './images/movie1.jpg';


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
      height: 390,
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
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Star Wars: Episódio I – A Ameaça Fantasma
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Obi-Wan e seu mentor embarcam em uma perigosa aventura na tentativa de salvar o 
                planeta das garras de Darth Sidious. Durante a viagem, eles conhecem um habilidoso 
                menino e decidem treiná-lo para se tornar um Jedi. Mas o tempo irá revelar que as 
                coisas nem sempre são o que aparentam ser.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                2h 16min | Ficção, Ação
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