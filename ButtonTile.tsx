import * as React from "react";
import { Element, ButtonTile, Action } from "./model";

interface Props {
  element: Element;
  handleAction: (action: Action) => void;
}

const ButtonTile: React.FC<Props> = ({ element, handleAction }) => {
  const { text, action } = element as ButtonTile;

  const handleClick = () => {
    if (action) {
      handleAction(action);
    }
  };

  return (
    <div className="button-tile">
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default ButtonTile;
