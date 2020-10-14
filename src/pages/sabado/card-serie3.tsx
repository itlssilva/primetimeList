import React from 'react';
import serie3 from './images/serie3.jpg';


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

  export default function Serie1Card() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= { serie3 }
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                The Walking Dead
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Episódio 3x13
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                17:45
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