import * as React from "react";

export interface ISliderElement{
  name: string,
  slider: string,
  initialPos: number,
  getTime: (time: string, name: string, left: string) => void, 
}