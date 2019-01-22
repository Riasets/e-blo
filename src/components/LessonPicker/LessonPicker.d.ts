import { CSSProperties } from "react";

export default interface ILessonPicker {
  toggleState: boolean,
  handleChange: (name: string) => void,
  style?: CSSProperties,
  containerClass?: string,
  headerClass?: string,
  name: string,
  setLesson: (name: string, numLesson: number) => void,
  valueToggle: string,
  valuePicker: string,
}