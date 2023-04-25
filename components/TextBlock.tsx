import * as React from "react";
import { TextTile } from "../model";
import { colorDic } from "../helper";

export default function TextBlock({
  text,
  title,
  color,
  elementKey,
}: TextTile) {
  //Getting hexadecimal color code for the background of TextBlock
  const decodedColor = colorDic[color];

  return (
    <div
      className="TextBlock"
      id={elementKey}
      style={{ backgroundColor: decodedColor }}
    >
      <header>{title}</header>
      <p className="text">{text}</p>
    </div>
  );
}
