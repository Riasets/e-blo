const InputFieldStyle = {
  formControl: {
    color: '#212121',
    fontSize: '1.6rem',
    fontWeight: 500,
    height: '2.4rem',
    fontFamily: "'Rubik', sans-serif",
    '&$underline:before':{
      borderBottom: '.2rem solid #424242',
    },
    '&$underline:after': {
      borderBottom: '.2rem solid #26a69a',
    },
  },
  labelStyle: {
    color: '#616161',
    fontFamily: "'Rubik', sans-serif",
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: 0,
    '&$shrink': {
      color: '#26a69a',
    },
  },
  underline: {},
  shrink: {},
};

export default InputFieldStyle;
