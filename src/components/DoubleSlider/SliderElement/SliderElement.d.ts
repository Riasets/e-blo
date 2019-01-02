import * as React from "react";

export interface ISliderElement{
  name: string,
  slider: string,
  mouseDown: (e: React.MouseEvent, name: string) => number,
  mouseMove: (e: React.MouseEvent,
               isMouseDown: boolean,
               sliderName: string,
               name: string,
               shiftX: number)=> void
}