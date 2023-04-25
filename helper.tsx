import * as React from "react";
import { ElementsType } from "./model";
import TextBlock from "./components/TextBlock";
import ImageBlock from "./components/ImageBlock";
import ButtonBlock from "./components/ButtonBlock";
import VerticalBlock from "./components/VerticalBlock";
import HorizontalBlock from "./components/HorizontalBlock";

//Change text value from definition file to hexadecimal representation of a color
export const colorDic = {
  dark: "#242538",
  mid: "#676aa3",
  light: "#8589d6",
};

// Returns component based on a "type" value in an object
export function getType(rootElement?: ElementsType) {
  switch (rootElement.type) {
    case "textTile":
      return (
        <TextBlock key={rootElement.elementKey} {...rootElement}></TextBlock>
      );
    case "imageTile":
      return (
        <ImageBlock key={rootElement.elementKey} {...rootElement}></ImageBlock>
      );
    case "buttonTile":
      return (
        <ButtonBlock
          key={rootElement.elementKey}
          {...rootElement}
        ></ButtonBlock>
      );
    case "verticalSplitter":
      return (
        <VerticalBlock
          key={rootElement.elementKey}
          {...rootElement}
        ></VerticalBlock>
      );
    case "horizontalSplitter":
      return (
        <HorizontalBlock
          key={rootElement.elementKey}
          {...rootElement}
        ></HorizontalBlock>
      );
  }
}
