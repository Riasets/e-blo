const InputMultilineFieldStyle = {
  focused: {},
  inputMultiline: {
    fontFamily: "'Rubik', sans-serif",
  },
  notchedOutline: {},
  multiline: {
    fontSize: "1.4rem",
    fontWeight: 400,
    fontFamily: "'Rubik', sans-serif",
    '&$focused':{
      '& $notchedOutline':{
        borderColor: '#26a69a',
        borderWidth: ".2rem",
      },
    },
  },
};

export default InputMultilineFieldStyle;
