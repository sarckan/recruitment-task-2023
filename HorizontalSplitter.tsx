import * as React from "react";
import { Element, HorizontalSplitter, ElementsType } from "./model";
import TextTile from "./TextTile";
import ImageTile from "./ImageTile";

interface Props {
  element: Element;
}

const HorizontalSplitter: React.FC<Props> = ({ element }) => {
  const { elements } = element as HorizontalSplitter;

  return (
    <div className="horizontal-splitter">
      {elements.map((el, index) => (
        <div key={index} className="splitter-child">
          {renderElement(el)}
        </div>
      ))}
    </div>
  );
};

const renderElement = (element: ElementsType) => {
  switch (element.type) {
    case "textTile":
      return <TextTile element={element} />;
    case "imageTile":
      return <ImageTile element={element} />;
    default:
      return null;
  }
};

export default HorizontalSplitter;
