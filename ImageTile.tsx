import * as React from "react";
import { Element, ImageTile } from "./model";

interface Props {
  element: Element;
}

const ImageTile: React.FC<Props> = ({ element }) => {
  const { title, source } = element as ImageTile;

  return (
    <div className="image-tile">
      <img src={source} alt={title} />
    </div>
  );
};

export default ImageTile;
