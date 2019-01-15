const SwitchStyle = {
  root: {},
  switchBase: {
    color: '#757575',
  },
  checked: {
    '& + $bar': {
      opacity: 1,
    },
  },
  icon: {
    boxShadow: 'none',
  },
  iconChecked: {
    boxShadow: 'none',
  },
  colorSecondary: {
    '&$checked': {
      color: '#009688',
      '& + $bar':{
        backgroundColor: '#b2dfdb',
      },
    },
  },
};

export default SwitchStyle;
