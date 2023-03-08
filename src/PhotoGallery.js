import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: '0 auto',
    marginTop: 20,
  },
  image: {
    height: 400,
    objectFit: 'cover',
  },
});

const PhotoGallery = () => {
  const classes = useStyles();

  const photos = [
    {
      url: 'https://randomwordgenerator.com/img/picture-generator/57e9dd464a5aa414f1dc8460962e33791c3ad6e04e50744172297bd59445c7_640.jpg',
      caption: 'Photo 1',
    },
    {
      url: 'https://randomwordgenerator.com/img/picture-generator/57e0d7454e51a414f1dc8460962e33791c3ad6e04e5074417c2e7dd39f4dcc_640.jpg',
      caption: 'Photo 2',
    },
    {
      url: 'https://randomwordgenerator.com/img/picture-generator/55e2dc454c5aaa14f1dc8460962e33791c3ad6e04e507441722872d59f4ac3_640.jpg',
      caption: 'Photo 3',
    },
    {
      url: 'https://randomwordgenerator.com/img/picture-generator/54e7d7404853a914f1dc8460962e33791c3ad6e04e507440752972d29e4bc3_640.jpg',
      caption: 'Photo 4',
    },
    {
      url: 'https://randomwordgenerator.com/img/picture-generator/53e0d2474f51ae14f1dc8460962e33791c3ad6e04e50744172277fd7964ec6_640.jpg',
      caption: '',
    },
  ];

  return (
    <div className={classes.root}>
      <Carousel showArrows autoPlay infiniteLoop showThumbs={true}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo.url} alt={photo.caption} className={classes.image} />
            <Typography variant="caption">{photo.caption}</Typography>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PhotoGallery;
