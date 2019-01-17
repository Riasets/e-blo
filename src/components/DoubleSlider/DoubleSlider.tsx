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
    firstThumbLeft: '',
    secondThumbLeft: '',
  };

  constructor(props: IDoubleSliderProps) {
    super(props);

    const firstLeft = props.firstInitialPos + "%";
    const secondLeft = props.secondInitialPos + "%";
    this.state = {
      firstThumb: timeToString(props.firstInitialPos * 14.39),
      secondThumb: timeToString(props.secondInitialPos * 14.39),
      firstThumbLeft: firstLeft,
      secondThumbLeft: secondLeft,
    };

    timeStringToNum(this.state.firstThumb) > timeStringToNum(this.state.secondThumb)
      ? props.setTime(this.state.secondThumb, this.state.firstThumb)
      : props.setTime(this.state.firstThumb, this.state.secondThumb);
  }

  public getTime = (time: string, name: string, left: string) => {
    this.setState({ [name]: time, [name + "Left"]: left });
    timeStringToNum(this.state.firstThumb) > timeStringToNum(this.state.secondThumb)
      ? this.props.setTime(this.state.secondThumb, this.state.firstThumb)
      : this.props.setTime(this.state.firstThumb, this.state.secondThumb);
  }

  public getWidth = () => {
    const first = document.getElementById('firstThumb');
    const second = document.getElementById('secondThumb');
    const firstLeft =  Number(first!.style.left!.match(/[0-9]/g)!.join(''));
    const secondLeft =  Number(second!.style.left!.match(/[0-9]/g)!.join(''));
    const width = Math.abs(firstLeft - secondLeft) + "px";
    const left = Math.min(firstLeft, secondLeft) + "px";
    this.setState({
      sliderLineWidth: width,
      sliderLineLeft: left,
    });
  }
  public render() {

    const firstLeft =  Number(this.state.firstThumbLeft.match(/[0-9.]/g)!.join(''));
    const secondLeft =  Number(this.state.secondThumbLeft.match(/[0-9.]/g)!.join(''));

    let left;
    let width;

    if (this.state.secondThumbLeft.endsWith('%') && this.state.firstThumbLeft.endsWith('%')) {

      width = Math.abs(firstLeft - secondLeft) + '%';
      left = firstLeft > secondLeft ? this.state.secondThumbLeft : this.state.firstThumbLeft;

    } else if (
          this.state.secondThumbLeft.endsWith('%') && !this.state.firstThumbLeft.endsWith('%')) {

      const sliderWidth = document.getElementById('slider')!.clientWidth;

      width = Math.abs(firstLeft - sliderWidth * secondLeft * 0.01) + 'px';

      left = firstLeft > sliderWidth * secondLeft * 0.01
        ? this.state.secondThumbLeft
        : this.state.firstThumbLeft;

    } else if (
      !this.state.secondThumbLeft.endsWith('%') && this.state.firstThumbLeft.endsWith('%')
    ) {

      const sliderWidth = document.getElementById('slider')!.clientWidth;

      width = Math.abs(secondLeft - sliderWidth * firstLeft * 0.01) + 'px';

      left = sliderWidth * firstLeft * 0.01 > secondLeft
        ? this.state.secondThumbLeft
        : this.state.firstThumbLeft;

    } else {

      width = Math.abs(firstLeft - secondLeft) + 'px';
      left = firstLeft > secondLeft ? this.state.secondThumbLeft : this.state.firstThumbLeft;

    }
    // Выравнивание по центру
    left = `calc(${left} + .45rem)`;

    return(
      <div id={'slider'} className={this.props.classes}>

        <div className={'slider-line'}
             style={{
               width,
               left,
             }}>
          <span/><span/><span/>
        </div>
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
