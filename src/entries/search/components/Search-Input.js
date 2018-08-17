import React from 'react';
import { navBarTopInput } from '../../../styles/constants';
import injectSheet from 'react-jss';

const SearchInput = props => (
  <input 
    type="text" 
    placeholder="Busca un producto..." 
    className={props.classes.input}
    onChange={props.handleSearch}
    value={props.search}
    autoFocus
  />
)
export default injectSheet(navBarTopInput)(SearchInput);