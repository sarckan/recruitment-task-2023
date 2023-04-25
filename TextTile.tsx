import * as React from "react";
import { Element, TextTile } from "./model";

interface Props {
  element: Element;
}

const TextTile: React.FC<Props> = ({ element }) => {
  const { title, text, color } = element as TextTile;

  return (
    <div
      className="text-tile"
      style={{ backgroundColor: color ? color : "transparent" }}
    >
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
};

export default TextTile;
