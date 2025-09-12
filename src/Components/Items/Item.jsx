import { useState } from "react";
import Button from "../Button/Button";

function Item({ value, index, deleteItem }) {
  const [isFulfilled, setIsFulfilled] = useState(value[1]);
  const deleteItemAtIndex = () => {
    deleteItem(index);
  };
  const [text] = value;
  const checkboxName = `checkbox-${index}`;
  return (
    <div className="list-item">
      <input
        id={checkboxName}
        name={checkboxName}
        label={checkboxName}
        title={checkboxName}
        type="checkbox"
        checked={isFulfilled}
        onChange={() => setIsFulfilled(!isFulfilled)}
      />
      <span className="todo-text">{text}</span>
      <Button onClick={deleteItemAtIndex}>Delete</Button>
    </div>
  );
}

export default Item;
