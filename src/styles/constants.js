export const grayPrimary = "#424242";
export const graySecundary = "#efefef";
export const bluePrimary = "#1c9ae8";
export const redPrimary  = "#f54646"; 

// Variables de fuentes
export const fontRegular = "'Lato', sans-serif"; 
export const fontBold = "'Lato-Bold', sans-serif"; 
export const fontItalic = "'Lato-Italic', sans-serif";

// Estilos 

export const horizontalList = {
  width:'100%',
  listStyle: 'none',
  padding: 0,
  margin:0,
  '& li': {
    float: 'left'
  }
}

export const content = {
  content : {
    padding: 0,
    marginTop: '7%'
  }
}

export const navBarTopButton = {
  float: 'right',
  border: `2px solid ${grayPrimary}69`,
  color: grayPrimary,
  '& button': {
    cursor: 'pointer',
    background: '#fff',
    padding: '8px',
    border: 'none !important'
  },
  transition: 'all 0.4s linear'
}

export const navBarTopInput = {
  input:{
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