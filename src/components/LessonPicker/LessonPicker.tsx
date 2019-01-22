import * as React from 'react';
import Switch from '@material-ui/core/Switch';
import ILessonPicker from './LessonPicker.d';

class LessonPicker extends React.Component<ILessonPicker> {
  public static defaultProps = {
    style: {},
    containerClass: '',
    headerClass: '',
  };

  public state = {
    number: [1, 2, 3, 4, 5],
  };

  public setLesson = (numLesson: number) => {
    this.props.setLesson(this.props.valuePicker, numLesson);
  }

  public addNum = () => {
    this.setState((state: {number: number[]}) => ({
      number: state.number.push(state.number.length + 1),
    }));
  }

  public handleToggle = () => {
    this.props.handleChange(this.props.valueToggle);
    console.log('darova');
  }

  public render() {
    return (
      <div style={this.props.style} className={this.props.containerClass}>
        <h6 className={this.props.headerClass}>{this.props.name}</h6>
        <div>
        <Switch
          checked={this.props.toggleState}
          name="isLesson"
          onChange={this.handleToggle}
          value="isLesson"
        />
          {
            this.props.toggleState && this.state.number.map((item, index) => (
              <span onClick={this.setLesson.bind(this, item)}>{item}</span>
            )) && <span onClick={this.addNum}>+</span>
          }
        </div>
      </div>
    );
  }
}

export default LessonPicker;
