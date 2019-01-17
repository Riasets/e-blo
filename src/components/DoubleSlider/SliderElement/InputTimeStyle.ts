const InputTimeStyle = {
  formControl: {
    color: '#212121',
    fontSize: '1.6rem',
    fontWeight: 400,
    height: '2.4rem',
    fontFamily: "'Rubik', sans-serif",
    caretColor: '#26a69a',
    '&$underline:before':{
      borderBottom: 'none',
    },
    '&$underline:hover:not($focused):not($disabled):not($error):before':{
      borderBottom: 'none',
    },
    '&$underline:after': {
      borderBottom: '.2rem solid #26a69a',
    },
    '&$underline': {
      '&$error:not($focused):after': {
        transform: 'scaleX(0)',
        borderBottomColor: '#424242',
      },
    },
  },
  disabled: {},
  error: {},
  underline: {},
  focused: {},
};

export default InputTimeStyle;
