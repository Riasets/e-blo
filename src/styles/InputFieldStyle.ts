const InputFieldStyle = {
  formControl: {
    color: '#212121',
    fontSize: '1.6rem',
    fontWeight: 500,
    height: '2.4rem',
    fontFamily: "'Rubik', sans-serif",
    caretColor: '#26a69a',
    '&$underline:before':{
      borderBottom: '.2rem solid #424242',
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
  labelStyle: {
    color: '#616161',
    fontFamily: "'Rubik', sans-serif",
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: 0,
    '&$shrink': {
      color: '#616161',
    },
  },
  underline: {},
  focused: {},
  shrink: {},
  inputType: {
    height: "1.1rem",
    fontSize: "3rem",
    letterSpacing: "-.1rem",
  },
  error:{},
  errorRoot: {
    color: '#eb4040',
    fontSize: '1.4rem',
    fontFamily: "'Rubik', sans-serif",
    fontWeight: 400,
  },
};

export default InputFieldStyle;
