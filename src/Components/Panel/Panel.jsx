import { useState } from "react";
import Item from "../Items/Item";
import NewItemInput from "../Items/NewItemInput";

import "./Panel.css";

function Panel(props) {
  const [items, setItems] = useState(props.details);
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible(!visible);
  const deleteItem = (index) => {
    setItems(items.toSpliced(index, 1));
  };
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };
  return (
    <div className="panel">
      <h3>
        {props.title}
        <span onClick={toggleVisibility}>
          {String.fromCharCode(visible ? 9650 : 9660)}
        </span>
      </h3>
      {visible && (
        <ul className="todo-list">
          {items.map((value, index) => (
            <Item key={index} {...{ value, deleteItem, index }} />
          ))}
          <NewItemInput key={items.length} {...{ addItem }} />
        </ul>
      )}
    </div>
  );
}

export default Panel;
