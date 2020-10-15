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
      height: 350,
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
                Star Wars: Episódio II – Ataque dos Clones
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Dez anos após a tentativa frustrada de invasão do planeta Naboo, 
                Obi-Wan Kenobi (Ewan McGregor), Anakin Skywalker (Hayden Christensen) e 
                Padmé Amidala (Natalie Portman) estão juntos novamente. 
                Destacados para proteger a agora senadora Amidala, que tem 
                sua vida ameaçada por facções separatistas da República, que ameaçam desencadear uma 
                guerra civil intergalática.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                2h 22min | Ficção, Ação
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