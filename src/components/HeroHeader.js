import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  root:{
    marginBottom: "20px",
  },
  titleText :{
    textAlign: "center",
    fontFamily: 'Lora',
  }
}));

export default function HeroHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box letterSpacing={10}>
      <Typography 
        className={classes.titleText} 
        color="primary"
        variant="h1"
      >
        toMate
      </Typography>
      </Box>
      <Box letterSpacing={8}>
      <Typography 
        className={classes.titleText} 
        color="Secondary"
        variant="h5"
      >
        -search your recipe-
      </Typography>
      </Box>
    </div>
  )
}