import * as React from 'react';
import { IDoubleSliderProps } from './DoubleSlider.d';
import './DoubleSlider.scss';

class DoubleSlider extends React.Component<IDoubleSliderProps>{
  public static defaultProps = {
    classes: '',
  };
  public state = {
    shiftX: 0,
  };
  public mouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
    const element = e.target as HTMLElement;
    const coords = this.getCoords(element);
    this.setState({ shiftX: e.pageX - coords.left });
    this.moveAt(e);
  }
  public getCoords = (elem: Element) => {
    const box = elem.getBoundingClientRect();
    return {
      left: box.left + pageXOffset,
    };
  }
  public moveAt = (e: React.MouseEvent<HTMLSpanElement>) => {
    (console as any).log(e);
    (e.target as HTMLElement).style.left = e.pageX - this.state.shiftX + 'px';
  }
  public mouseUp = (e: React.MouseEvent<HTMLSpanElement>) => {
    document.onmousemove = null;
  }
  public render() {
    return(
      <div className={this.props.classes}>
        <span
          className={'slider-element'}
          onMouseDown={this.mouseDown}
          onMouseMove={this.moveAt}
          onMouseUp={this.mouseUp}
        >
          123</span>
      </div>
    );
  }
}

export default DoubleSlider;
