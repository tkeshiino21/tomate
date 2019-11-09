import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  ol:{
    listStyleType: 'none',
    paddingRight: '42px',
    fontStyle: 'italic',
  },
  recipe: {
    marginTop: '10px',
  },
}));

const Recipe = ({title, image, ingredients}) => {
  const classes = useStyles();
  return(
    <div className={classes.recipe}>
      <h2>{title}</h2>
      <img src={image} alt="" />
      <ol className={classes.ol}>
        {ingredients.map(ingredient =>
          <li>{ingredient.text}</li>
        )}
      </ol>

    </div>

  );
};

export default Recipe;