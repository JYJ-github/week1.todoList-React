import "./Change.css";

const Change = (props) => {
  return (
    <span>
      <input
        id={props.id}
        className="ChangeBtn"
        onClick={props.onChangeHandler}
        value={props.children}
        type="button"
      />
    </span>
  );
};

export default Change;
