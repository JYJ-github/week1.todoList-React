import "./App.css";
import Header from "./component/00.header/Header";
import Input from "./component/01.input/Input";
import ReadingFalse from "./component/02.readingFalse/ReadingFalse";
import ReadingTrue from "./component/03.readingTrue/ReadingTrue";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해 봅시다.",
      isDone: false,
    },
    {
      id: 1,
      title: "자바 공부하기",
      body: "자바 기초를 공부해 봅시다.",
      isDone: true,
    },
  ]); //리스트 디폴트 값

  const [nextId, setNextId] = useState(2); //id값 state

  const onSubmitHandler = (title, body) => {
    const newTodo = {
      id: nextId,
      title: title,
      body: body,
      isDone: false,
    };
    //onSubmitHandler를 통해 newTodo를 생성하고 todoList에 push할 예정
    const newTodoList = [...todoList];
    //useState가 변화를 감지해야 하기 때문에 spred형식으로 새로운 변수에 값을 할당
    newTodoList.push(newTodo); //새로운 리스트에 앞서 생성했던 newTodo를 push
    setTodoList(newTodoList); //useState를 변경
    setNextId(nextId + 1); //id값도 유일해야하기 때문에 변경
  }; //이 함수를 통해 todoList의 state를 변경 새로운 값을 추가

  return (
    <div className="main">
      <Header />
      <Input onSubmitHandler={onSubmitHandler} />
      <ReadingFalse todoList={todoList} setTodoList={setTodoList} />
      <ReadingTrue todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
