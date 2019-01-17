import { CSSProperties } from "react";

export default interface ILessonPicker {
  toggleState: boolean,
  handleChange: () => void,
  style?: CSSProperties,
  containerClass?: string,
  headerClass?: string,
  name: string,
  setLesson: (numLesson: number) => void,
}