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
//7번라인의 id={props.id}를 통해 카드를 생성할 때 버튼에 id값을 부여
export default Delete;
