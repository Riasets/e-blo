import * as React from 'react';
import { ISliderElement } from './SliderElement.d';

import './SliderElement.scss';

class SliderElement extends React.Component<ISliderElement> {

  public state = {
    isMouseDown: false,
    shiftX: 0,
  };

  public mouseDownHandler = (e: React.MouseEvent) => {
    /*this.setState({ isMouseDown: true });
    this.setState({ shiftX: this.props.mouseDown(e, this.props.name) });*/
    e.preventDefault();
    document.addEventListener('mousemove', this.mouseMoveHandler);
    document.addEventListener('mouseup', this.mouseUpHandler);
    this.setState({ isMouseDown: true });
    const toddler = document.getElementById(this.props.name);
    const toddlerCoords = this.getCoords(toddler as HTMLDivElement);
    this.setState({ shiftX: e.pageX - toddlerCoords.left });
  }

  public mouseMoveHandler = (e: any) => {
    /*this.props.mouseMove(
      e,
      this.state.isMouseDown,
      this.props.slider,
      this.props.name,
      this.state.shiftX);*/
    console.log(this.state.isMouseDown);
    if (this.state.isMouseDown) {
      const slider = document.getElementById(this.props.slider);
      const toddler = document.getElementById(this.props.name);
      const sliderCoords = this.getCoords(slider as HTMLDivElement);
      let newLeft = e.pageX - this.state.shiftX - sliderCoords.left;

      if (newLeft < 0) newLeft = 0;
      const rightSide = slider!.clientWidth - toddler!.offsetWidth;
      if (newLeft > rightSide) newLeft = rightSide;

      toddler!.style.left = newLeft + 'px';
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

  public render() {
    return(
      <div
        className={'thumb'}
        id={this.props.name}
        onMouseDown={this.mouseDownHandler}
      >
        <span/>
      </div>
    );
  }
}
export default  SliderElement;
