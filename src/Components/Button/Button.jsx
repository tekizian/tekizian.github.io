function Button(props) {
  return (
    <button type="button" className={props.className} onClick={props.clickFn}>
      {props.text}
    </button>
  );
}

export default Button;
