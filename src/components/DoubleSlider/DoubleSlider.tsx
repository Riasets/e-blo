import * as React from 'react';
import { IDoubleSliderProps } from './DoubleSlider.d';
import './DoubleSlider.scss';
import SliderElement from "./SliderElement/SliderElement";
import { timeStringToNum } from "../../utils/dateParse";
import { timeToString } from "../../utils/dayInfoParse";

class DoubleSlider extends React.Component<IDoubleSliderProps>{
  public static defaultProps = {
    classes: 'slider',
  };

  public state = {
    firstThumb: '',
    secondThumb: '',
  };

  constructor(props: IDoubleSliderProps) {
    super(props);

    this.state = {
      firstThumb: timeToString(props.firstInitialPos * 14.4),
      secondThumb: timeToString(props.secondInitialPos * 14.4),
    };
  }

  public getTime = (time: string, name: string) => {
    this.setState({ [name]: time });
    timeStringToNum(this.state.firstThumb) > timeStringToNum(this.state.secondThumb)
      ? this.props.setTime(this.state.secondThumb, this.state.firstThumb)
      : this.props.setTime(this.state.firstThumb, this.state.secondThumb);
  }

  public render() {
    return(
      <div id={'slider'} className={this.props.classes}>
        <SliderElement
          name={'firstThumb'}
          slider={'slider'}
          initialPos={this.props.firstInitialPos}
          getTime={this.getTime}
        />
        <SliderElement
          name={'secondThumb'}
          slider={'slider'}
          initialPos={this.props.secondInitialPos}
          getTime={this.getTime}
        />
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
        <div className="hour"/>
      </div>
    );
  }
}

export default DoubleSlider;
