const InputMultilineFieldStyle = {
  formControl: {
    fontSize: "1.4rem",
    fontWeight: 400,
    fontFamily: "'Rubick', sans-serif",
    '&$focused':{
      '&$notchedOutline':{
        borderColor: '#26a69a',
      },
    },
  },
  focused: {
    '&$notchedOutline':{
      borderColor: '#26a69a',
    },
  },
  inputMultiline: {
    fontFamily: "'Rubick', sans-serif",
  },
  notchedOutline: {},
};

export default InputMultilineFieldStyle;
