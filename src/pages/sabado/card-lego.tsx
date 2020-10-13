import React from 'react';
import imgLego from './images/umaAventuraLego2.jpg';


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
      height: 232,
    },
  });

  export default function LegoCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= { imgLego }
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Uma Aventura Lego 2
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Cinco anos após os eventos do primeiro filme, a batalha contra inimigos alienígenas faz com que a
                cidade Lego torne-se Apocalipsópolis, em um futuro distópico onde nada mais é incrível. Neste
                contexto,
                Emmet constrói uma casa para que possa viver ao lado de Lucy, mas ela ainda o considera ingênuo
                demais.
                Quando um novo ataque captura não apenas Lucy, mas também Batman, Astronauta, UniKitty e o pirata,
                levando-os ao sistema planetário de Manar, cabe a Emmet construir uma espaçonave e partir em seu
                encalço.
                No caminho ele encontra Rex Perigoso,
                um navegante solitário que decide ajudá-lo em sua jornada.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                1h 48min | Animação, Aventura
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