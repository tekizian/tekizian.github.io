import Button from "../Button/Button";

function Item({ value, index, deleteItem }) {
  const deleteItemAtIndex = () => {
    deleteItem(index);
  };
  const checkboxName = `checkbox-${index}`;
  return (
    <li className="list-item">
      <input
        id={checkboxName}
        name={checkboxName}
        label={checkboxName}
        title={checkboxName}
        type="checkbox"
        placeholder={false}
      />
      <span>{value}</span>
      <Button {...{ text: "Delete", clickFn: deleteItemAtIndex }} />
    </li>
  );
}

export default Item;
