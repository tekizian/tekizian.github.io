import { useState } from "react";
import Item from "../Items/Item";
import NewItemInput from "../Items/NewItemInput";
import "./Panel.css";

const uuid = () => Math.floor(Math.random() * 10000000000);

function Panel(props) {
  const defaultDetails = [
    [uuid(), "Integrate with Auth0", true],
    [uuid(), "Create a secure endpoint", true],
    [uuid(), "Connect Server to database", false],
  ];
  const detailsMap = new Map(defaultDetails.map(([id, text, isChecked], i) => [id, { text, isChecked }]));
  const [items, setItems] = useState(detailsMap);
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible(!visible);

  const addItem = (newItem) => {
    setItems((prev) => {
      const next = new Map(prev);
      let id = uuid();
      while (next.has(id)) { // Avoid collisions
        id = uuid();
      }
      next.set(id, newItem);
      return next;
    });
  };
  return (
    <div className="panel">
      <div className="title" onClick={toggleVisibility}>

        <h4 className="text">
          {props.title}
        </h4>
        <span className="collapse-icon">
          {String.fromCharCode(visible ? 9650 : 9660)}
        </span>
      </div>
      {visible ? (
        <div className="todo-list list">
          <Items {...{ setItems, items }} />
          <NewItemInput key={items.length} {...{ addItem }} />
        </div>
      ) : undefined}
    </div>
  );
}

function Items({ items, setItems }) {
  return <>{
    items.entries().map(([id, { text, isChecked }]) =>
      <Item key={id} {...{ text, isChecked, setItems, id }} />
    )
  }</>
}

export default Panel;
