import "./Delete.css";

const Delete = (props) => {
  return (
    <span>
      <input
        id={props.id}
        className="deleteBtn"
        onClick={props.deleteBtn}
        value="삭제하기"
        type="button"
      />
    </span>
  );
};

export default Delete;
