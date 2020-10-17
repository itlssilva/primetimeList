import React from 'react';
import primeserie1 from './images/primetimeserie.jpeg';


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

  export default function PrimeSerie1Card() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image= { primeserie1 }
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Lovecraft Country
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Episódio 1x09 - Rewind 1921
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                23:15
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