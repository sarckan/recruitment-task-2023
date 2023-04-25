import * as React from "react";
import { ImageTile } from "../model";

export default function ImageBlock({ elementKey, title, source }: ImageTile) {
  return (
    <div className="imageBlock">
      <img className="image" id={elementKey} src={source}></img>
    </div>
  );
}
