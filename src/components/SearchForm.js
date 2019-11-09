import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    marginTop: '10px',
  },
  searchBox: {
    backgroundColor: '#ffffff',
    padding: '0px 5px 0px 20px',
  },
}));

export default function SearchForm() {

  const classes = useStyles();

  return (
    <div className={classes.root}> 
    <div className="App">
      <Box
          border={1}
          borderColor="secondary.main"
          borderRadius={32}
          className={classes.searchBox}
      >
      <form onSubmit={getSearch} className="searchForm">
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
    </div>
    </div>
  )
}