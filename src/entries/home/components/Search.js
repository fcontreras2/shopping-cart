import React from 'react';
import {fontRegular, bluePrimary, fontItalic, grayPrimary} from '../../../styles/constants';

import injectSheet from 'react-jss';

const styles = {
  input: {
    maxWith: '100%',
    width: '250px',
    padding: '8px',
    color:grayPrimary,
    fontFamily: fontRegular,
    '&:focus': {
      outline: 'none',
      border: `2px solid ${bluePrimary}` 
    },
    '&::-webkit-input-placeholder': {
      fontFamily: fontItalic
    }
  }
}

const Search = props => (
  <input 
    type="text" 
    placeholder="Busca un producto..." 
    className={props.classes.input}
    onChange={props.handleSearch}
  />
)
export default injectSheet(styles)(Search);