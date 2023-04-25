import * as React from "react";
import {
  ElementsType,
  Element,
  TextTile,
  ImageTile,
  ButtonTile,
  HorizontalSplitter,
  VerticalSplitter,
} from "./model";

interface Props {
  element: ElementsType;
}

export function Tile(props: Props) {
  const { element } = props;

  switch (element.type) {
    case "textTile":
      return (
        <div
          className={`tile tile-text ${element.color ?? ""}`}
          key={element.elementKey}
        >
          {element.title && <h2>{element.title}</h2>}
          {element.text && <p>{element.text}</p>}
        </div>
      );
    case "imageTile":
      return (
        <div className="tile tile-image" key={element.elementKey}>
          <img src={element.source} alt={element.title} />
        </div>
      );
    case "buttonTile":
      return (
        <div className="tile tile-button" key={element.elementKey}>
          <button onClick={() => handleButtonClick(element.action)}>
            {element.text}
          </button>
        </div>
      );
    case "horizontalSplitter":
      return (
        <div className="tile tile-horizontal-splitter" key={element.elementKey}>
          {element.elements.map((childElement) => (
            <Tile key={childElement.elementKey} element={childElement} />
          ))}
        </div>
      );
    case "verticalSplitter":
      return (
        <div className="tile tile-vertical-splitter" key={element.elementKey}>
          {element.elements.map((childElement) => (
            <Tile key={childElement.elementKey} element={childElement} />
          ))}
        </div>
      );
    default:
      return null;
  }

  function handleButtonClick(action: {
    type: string;
    referenceElementKey: string;
    value: { [key: string]: string };
  }) {
    if (action.type === "update") {
      const { referenceElementKey, value } = action;
      // find element to update
      // in this example we are simply logging the new value to the console
      console.log(
        `Updating element with key ${referenceElementKey} with new value:`,
        value
      );
    }
  }
}
