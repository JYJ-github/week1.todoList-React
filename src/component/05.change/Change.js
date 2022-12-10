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
//Delete버튼과 작동 방식이 유사합니다.
export default Change;
