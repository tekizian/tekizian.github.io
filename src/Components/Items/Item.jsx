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
    <li className="list-item">
      <input
        id={checkboxName}
        name={checkboxName}
        label={checkboxName}
        title={checkboxName}
        type="checkbox"
        checked={isFulfilled}
        onChange={() => setIsFulfilled(!isFulfilled)}
      />
      <span>{text}</span>
      <Button {...{ text: "Delete", clickFn: deleteItemAtIndex }} />
    </li>
  );
}

export default Item;
