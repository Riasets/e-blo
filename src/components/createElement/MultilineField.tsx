import * as React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputMultilineFieldStyle from 'src/styles/InputMultilineFieldStyle';
import { IMultilineFieldProps } from './MultilineField.d';

class MultilineField extends React.Component<IMultilineFieldProps>{
  public static defaultProps = {
    rows: 4,
    labelWidth: 0,
    placeholder: '',
  };
  public render() {
    const {
      value,
      name,
      onChange,
      rows,
      classes,
      placeholder,
      labelWidth,
    } = this.props;
    return (
      <FormControl fullWidth={true}>
      <OutlinedInput
        value={value}
        name={name}
        onChange={onChange}
        multiline = {true}
        labelWidth = {labelWidth}
        rows={rows}
        placeholder={placeholder}
        classes = {{
          notchedOutline: classes.notchedOutline,
          focused: classes.focused,
          multiline: classes.multiline,
          inputMultiline: classes.inputMultiline,
        }}
    />
    </FormControl>
    );
  }
}

export default withStyles(InputMultilineFieldStyle)(MultilineField);
