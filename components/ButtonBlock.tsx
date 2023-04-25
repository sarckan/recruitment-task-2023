import * as React from "react";
import { Action, ButtonTile } from "../model";
import { colorDic } from "../helper";

export default function ButtonBlock({ elementKey, text, action }: ButtonTile) {
  //Depending of the value provided in "Action" it updates value in appropriate element
  function handleOnClick(action: Action) {
    const elem = document.getElementById(action.referenceElementKey);
    if (action.value.color)
      elem.style.backgroundColor = colorDic[action.value.color];
    else if (action.value.source) {
      elem.setAttribute("src", action.value.source);
    }
  }
  return (
    <div className="ButtonBlock">
      <button
        className="text"
        onClick={() => {
          handleOnClick(action);
        }}
      >
        {text}
      </button>
    </div>
  );
}
