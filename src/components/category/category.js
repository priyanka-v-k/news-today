import "./category.scss";
const Category = (props) => {
  const classes = props.disabled
    ? props.className + " disabled"
    : props.className;
  return (
    <div
      className={classes}
      onClick={() => {
        if (props.disabled) return;
        props.onClickHandler();
      }}
    >
      {props.children}
    </div>
  );
};

export default Category;
