import IStyleClasses from "../../interfaces/Style";
import * as React from "react";

export interface IMultilineFieldProps {
  value: string,
  name: string,
  onChange: onChange,
  rows: number,
  classes: IStyleClasses,
  placeholder?: string,
  labelWidth: number
}

type onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;