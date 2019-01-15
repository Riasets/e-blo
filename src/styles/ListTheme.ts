import { createMuiTheme } from '@material-ui/core/styles';
import InputFieldStyle from './InputFieldStyle';
import InputMultilineFieldStyle from './InputMultilineFieldStyle';
import SwitchStyle from './SwitchStyle';
import FormHelperTextStyle from './FormHelperTextStyle';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiInput: {
      focused: InputFieldStyle.focused,
      formControl: InputFieldStyle.formControl,
      underline: InputFieldStyle.underline,
      error: InputFieldStyle.error,
      multiline: InputMultilineFieldStyle.multiline,
      inputMultiline: InputMultilineFieldStyle.inputMultiline,

    },
    MuiInputLabel: {
      shrink: InputFieldStyle.shrink,
      root: InputFieldStyle.labelStyle,
    },
    MuiSwitch: SwitchStyle,
    MuiFormHelperText: FormHelperTextStyle,
  },
});

export default theme;
