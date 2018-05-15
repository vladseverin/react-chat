import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchBar = ({ classes }) => ( 
  <TextField
    fullWidth
    margin="normal"
    placeholder="Search chat..."
  />
);

export default SearchBar;
