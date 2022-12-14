import Delete from "../04.delete/Delete";
import Change from "../05.change/Change";
import "./ReadingFalse.css";

const ReadingFalse = (props) => {
  const deleteBtn = (event) => {
    const deleteTodoList = [];
    for (let i = 0; i < props.todoList.length; i++) {
      if (props.todoList[i].id !== Number(event.target.id)) {
        deleteTodoList.push(props.todoList[i]);
      }
    }
    props.setTodoList(deleteTodoList);
  };
  //삭제버튼에 id값을 부여하여 눌린 삭제버튼의 id값과 같은 id값을 가진 객체를 리스트에서 삭제

  const onChangeHandler = (event) => {
    const changeTodoList = [];
    for (let i = 0; i < props.todoList.length; i++) {
      if (props.todoList[i].id === Number(event.target.id)) {
        props.todoList[i].isDone
          ? (props.todoList[i].isDone = false)
          : (props.todoList[i].isDone = true);
        changeTodoList.push(props.todoList[i]);
      } else {
        changeTodoList.push(props.todoList[i]);
      }
    }
    props.setTodoList(changeTodoList);
  };
  //삭제버튼과 마찬가지로 수정버튼에 id값을 부여하여 같은 id값을 가진 객체의
  //isDone의 boolean값을 삼항연산자로 변경후 useState가 감지할 수 있도록
  //changTodoList를 생성후 push하는 방식으로 복사하였습니다.

  return (
    <div>
      <h2>Working..!💕</h2>
      {props.todoList
        .filter((todo) => todo.isDone === false)
        .map((todo) => {
          return (
            <div className="todo-container1" key={todo.id}>
              <h2>{todo.title}</h2>
              <div>{todo.body}</div>
              <Delete deleteBtn={deleteBtn} id={todo.id} />
              <Change onChangeHandler={onChangeHandler} id={todo.id}>
                완료
              </Change>
            </div>
          );
        })}
    </div>
  );
};
//filter와map method를 통해 isDone이 false인 객체만 읽었는데
//map,filter메소드를 if else방식으로 쓰는법을 몰라서 읽는 작업을 두 번 해야(readingfalse, readingtrue) 했습니다.
export default ReadingFalse;
