import { useState } from "react";
import Button from "../Button/Button";

function NewItemInput({ addItem }) {
  const [newItem, setNewItem] = useState("");
  const handleAddItem = () => {
    if (!newItem.length) return;
    addItem([newItem, false]);
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
    <div className="new-input list-item">
      <input
        title=""
        name="new-item"
        placeholder="new item"
        type="text"
        onChange={onNewItemInputChange}
        onKeyDown={onKeyDownFn}
        value={newItem || ''}
        className="todo-text"
      />
      <Button className="add"
        clickFn={handleAddItem}
      >+</Button>
    </div>
  );
}

export default NewItemInput;
