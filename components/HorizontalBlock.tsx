import * as React from "react";
import { HorizontalSplitter } from "../model";
import { getType } from "../helper";

export default function HorizontalBlock({
  elementKey,
  elements,
}: HorizontalSplitter) {
  return (
    <div className="horizontal">
      {/* Returns appropriate element (defined by getType function) for each object in "elements" array in splitter object*/}
      {elements.map((element) => getType(element))}
    </div>
  );
}
