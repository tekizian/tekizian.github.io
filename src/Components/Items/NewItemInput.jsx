import { useState } from "react";
import Button from "../Button/Button";

function NewItemInput({ addItem }) {
  const [newItem, setNewItem] = useState("");
  const handleAddItem = () => {
    if (!newItem.length) return;
    addItem(newItem);
    setNewItemValue("");
  };
  const setNewItemValue = (v) => setNewItem(v);
  const onNewItemInputChange = (e) => {
    setNewItemValue(e.target.value);
  };
  const onKeyDownFn = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };
  return (
    <li className="new-input">
      <input
        title=""
        name="new-item"
        placeholder="new item"
        type="text"
        onChange={onNewItemInputChange}
        onKeyDown={onKeyDownFn}
        value={newItem || ''}
      />
      <Button
        {...{
          text: "+",
          clickFn: handleAddItem,
        }}
      />
    </li>
  );
}

export default NewItemInput;
