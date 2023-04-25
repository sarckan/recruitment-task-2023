import * as React from "react";
import { Layout } from "../model";
import { getType } from "../helper";

export default function LayoutBlock({ title, rootElement }: Layout) {
  return (
    <div className="rootBlock">
      {/* Returns object of rootElement's type */}
      {getType(rootElement)}
    </div>
  );
}
