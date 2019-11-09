import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Recipe from './Recipe'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    margin:'0px 10px 25px 10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
  },
}));

export default function Recipes() {
  const APP_ID = "72a607fa";
  const APP_KEY = "db17e300bfa49a42ff1ff6b0f1fe058c";
  const [ recipes, setRecipes ] = useState([]) ;
  const [ search, setSearch ] = useState("");
  const [ query, setQuery ] = useState('tomate');

  useEffect(() =>{
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch (
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data= await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  const classes = useStyles();
  return (
    <div className="App">
      <Box
          border={2}
          borderColor="secondary.main"
          borderRadius={32}
          className={classes.searchBox}
      >
      <form onSubmit={getSearch} className={classes.searchForm}>
        <InputBase
          className={classes.textField}
          placeholder="tomate"
          label="Number"
          type="input" 
          value={search}
          onChange={updateSearch}
        />
        <IconButton className={classes.iconButton} aria-label="search" type="submit">
          <SearchIcon />
        </IconButton>
      </form>
      </Box>
    <Container>
      <Grid container spacing={3}>
      {recipes.map(recipe => (
        <Grid item xs={12} sm={6}>
        <Recipe
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
        <a href={recipe.recipe.url} className={classes.link}>
        <Button variant="contained" color="primary" className={classes.button}>
          <Typography color="textSecondary">
            View
          </Typography>
        </Button>
        </a>
        </Grid>
      ))}
      </Grid>
    </Container>
    </div>
  );
}
