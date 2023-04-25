import * as React from "react";
import "./style.css";
import LayoutBlock from "./components/LayoutBlock";
import { Layout } from "./model";

export default function App() {
  const defaultValue: Layout = {
    rootElement: {
      type: "textTile",
      elementKey: "",
    },
  };
  const [data, setData] = React.useState(defaultValue);

  React.useEffect(() => {
    const response = fetch("http://localhost:8080/definition")
      .then((response) => response.json())
      .then((data) => setData(data[0]));
  }, []);

  return (
    <div className="main">
      {data && <h1>{data.title}</h1>}
      {data && <LayoutBlock {...data}></LayoutBlock>}
    </div>
  );
}
