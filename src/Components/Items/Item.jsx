import Button from "../Button/Button";

function Item({ id, text, isChecked, index, setItems }) {
  const deleteItem = () => {
    setItems((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    })
  }
  const toggleItem = () => {
    setItems((prev) => {
      const next = new Map(prev);
      const base = prev.get(id);
      next.set(id, { ...base, isChecked: !base.isChecked });
      return next;
    })
  }
  const checkboxName = `checkbox-${index}`;
  return (
    <div className="list-item">
      <input
        id={checkboxName}
        name={checkboxName}
        label={checkboxName}
        title={checkboxName}
        type="checkbox"
        checked={isChecked}
        onChange={toggleItem}
      />
      <span className="todo-text">{text}</span>
      <Button onClick={deleteItem}>Delete</Button>
    </div>
  );
}

export default Item;
