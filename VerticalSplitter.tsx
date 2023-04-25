import * as React from "react";
import { Element, VerticalSplitter, ElementsType } from "./model";

interface Props {
  element: Element;
}

const VerticalSplitter: React.FC<Props> = ({ element }) => {
  const { elements } = element as VerticalSplitter;

  return (
    <div className="vertical-splitter">
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

export default VerticalSplitter;
