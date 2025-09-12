function Button(props) {
  return (
    <button type="button" className={props.className} onClick={props.clickFn}>
      {props.children}
    </button>
  );
}

export default Button;
