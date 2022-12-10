import Delete from "../04.delete/Delete";
import Change from "../05.change/Change";
import "./ReadingTrue.css";

const ReadingTrue = (props) => {
  const deleteBtn = (event) => {
    const deleteTodolist = [];
    for (let i = 0; i < props.todoList.length; i++) {
      if (props.todoList[i].id !== Number(event.target.id)) {
        deleteTodolist.push(props.todoList[i]);
      }
    }
    props.setTodoList(deleteTodolist);
  };

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

  return (
    <div>
      <h2>Done..!🎉</h2>
      {props.todoList
        .filter((todo) => todo.isDone === true)
        .map((todo) => {
          return (
            <div className="todo-container2" key={todo.id}>
              <h2>{todo.title}</h2>
              <div>{todo.body}</div>
              <Delete deleteBtn={deleteBtn} id={todo.id} />
              <Change onChangeHandler={onChangeHandler} id={todo.id}>
                취소
              </Change>
            </div>
          );
        })}
    </div>
  );
};

export default ReadingTrue;
