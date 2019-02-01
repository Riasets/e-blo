import * as React from 'react';
import Switch from '@material-ui/core/Switch';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ILessonPicker from './LessonPicker.d';
import './LessonPicker.scss';

class LessonPicker extends React.Component<ILessonPicker> {
  public static defaultProps = {
    style: {},
    containerClass: '',
    headerClass: '',
    elementClass: '',
    checkedElementClass: '',
  };

  public state = {
    number: ['1', '2', '3', '4', '5'],
    checkedNumber: null,
  };

  public setLesson = (numLesson: string) => {
    this.props.setLesson(this.props.valuePicker, Number(numLesson));
    this.setState({ checkedNumber: numLesson });
  }

  public addNum = () => {
    this.setState((state: {number: string[]}) => ({
      number: [...state.number, String(state.number.length + 1)],
    }));
  }

  public handleToggle = () => {
    this.props.handleChange(this.props.valueToggle);
  }

  public render() {
    const num = this.state.number;
    return (
      <div style={this.props.style} className={this.props.containerClass}>
        <h6 className={this.props.headerClass}>{this.props.name}</h6>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '-1.3rem',
        }}>
          <Switch
            checked={this.props.toggleState}
            name="isLesson"
            onChange={this.handleToggle}
            value="isLesson"
          />
          <PerfectScrollbar
            className={'scroll-box'}
          >
              { this.props.toggleState &&
                num.map((item: any, index: number) => (
                  <span className={`${this.props.elementClass}
                  ${this.state.checkedNumber === item ? this.props.checkedElementClass : ''}`}
                        key={`lesson ${index}`}
                        onClick={this.setLesson.bind(this, item)}>
                    {item}
                  </span>
                ))
              }
              { this.props.toggleState &&
                <span className={this.props.elementClass} onClick={ this.addNum }>+</span>
              }
          </PerfectScrollbar>
        </div>
      </div>
    );
  }
}

export default LessonPicker;
