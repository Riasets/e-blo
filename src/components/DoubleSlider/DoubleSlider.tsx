import * as React from 'react';
import { IDoubleSliderProps } from './DoubleSlider.d';
import './DoubleSlider.scss';
import SliderElement from "./SliderElement/SliderElement";

class DoubleSlider extends React.Component<IDoubleSliderProps>{
  public static defaultProps = {
    classes: 'slider',
  };

  public mouseDownHandler = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    const toddler = document.getElementById(name);
    const toddlerCoords = this.getCoords(toddler as HTMLDivElement);
    return e.pageX - toddlerCoords.left;
  }

  public mouseMoveHandler = (e: React.MouseEvent,
                             isMouseDown: boolean,
                             sliderName: string,
                             name: string,
                             shiftX: number) => {
    console.log(isMouseDown);
    if (isMouseDown) {
      const slider = document.getElementById(sliderName);
      const toddler = document.getElementById(name);
      const sliderCoords = this.getCoords(slider as HTMLDivElement);
      let newLeft = e.pageX - shiftX - sliderCoords.left;

      if (newLeft < 0) newLeft = 0;
      const rightSide = slider!.clientWidth - toddler!.offsetWidth;
      if (newLeft > rightSide) newLeft = rightSide;

      toddler!.style.left = newLeft + 'px';
    }
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
      <div id={'slider'} className={this.props.classes}>
        <SliderElement
          mouseDown={this.mouseDownHandler}
          mouseMove={this.mouseMoveHandler}
          name={'first-thumb'}
          slider={'slider'}
        />
        <SliderElement
          mouseDown={this.mouseDownHandler}
          mouseMove={this.mouseMoveHandler}
          name={'second-thumb'}
          slider={'slider'}
        />
      </div>
    );
  }
}

export default DoubleSlider;
