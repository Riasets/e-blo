import * as React from 'react';
import { ISliderElement } from './SliderElement.d';
import { timeToString } from "../../../utils/dayInfoParse";

import './SliderElement.scss';

class SliderElement extends React.Component<ISliderElement> {

  public state = {
    isMouseDown: false,
    shiftX: 0,
    time: "00:00",
  };

  constructor(props:ISliderElement) {
    super(props);

    const newTime = timeToString(props.initialPos * 14.4);
    this.state = {
      isMouseDown: false,
      shiftX: 0,
      time: newTime,
    };
  }

  public mouseDownHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    document.addEventListener('mousemove', this.mouseMoveHandler);
    document.addEventListener('mouseup', this.mouseUpHandler);
    this.setState({ isMouseDown: true });
    const toddler = document.getElementById(this.props.name);
    const toddlerCoords = this.getCoords(toddler as HTMLDivElement);
    this.setState({ shiftX: e.pageX - toddlerCoords.left });
  }

  public mouseMoveHandler = (e: any) => {
    if (this.state.isMouseDown) {
      const slider = document.getElementById(this.props.slider);
      const toddler = document.getElementById(this.props.name);
      console.log(slider);
      const sliderCoords = this.getCoords(slider as HTMLDivElement);
      let newLeft = e.pageX - this.state.shiftX - sliderCoords.left;

      if (newLeft < 0) newLeft = 0;
      const rightSide = slider!.clientWidth - toddler!.offsetWidth;
      if (newLeft > rightSide) newLeft = rightSide;

      toddler!.style.left = newLeft + 'px';
      this.setState({ time: this.getTime() });
      this.props.getTime(this.state.time, this.props.name, newLeft + 'px');
    }
  }

  public mouseUpHandler = (e: any) => {
    document.removeEventListener('mousemove', this.mouseMoveHandler);
    document.removeEventListener('mouseup', this.mouseUpHandler);
    this.setState({ isMouseDown: false });
  }

  public getCoords = (elem: HTMLDivElement) => {
    const box = elem.getBoundingClientRect();
    return {
      left: box.left,
      top: box.top + pageYOffset,
    };
  }

  public getTime = () => {
    const slider = document.getElementById(this.props.slider);
    const toddler = document.getElementById(this.props.name);
    const left = Number(toddler!.style.left!.match(/[0-9]/g)!.join(''));
    const sliderWidth = Number(slider!.clientWidth!);
    const toddlerWidth = Number(toddler!.clientWidth!);
    const percents = left / (sliderWidth - toddlerWidth);
    return timeToString(Math.round(1440 * percents));
  }

  public render() {
    return(
      <div
        className={'thumb'}
        id={this.props.name}
        onMouseDown={this.mouseDownHandler}
        style={{ left: `${this.props.initialPos}%` }}
      >
        <span/>
        <p className={'time'}>{ this.state.time }</p>
      </div>
    );
  }
}
export default  SliderElement;
