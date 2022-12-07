import "./App.css";
// import styled from "styled-components";
import { useState } from "react";

function Create(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onSubmitHandle(title, body);
        event.target.title.value = null;
        event.target.body.value = null;
      }}
    >
      <label>제목</label>
      <input type="text" name="title"></input>
      <label>내용</label>
      <input type="body" name="body"></input>
      <input type="submit" value="추가하기"></input>
    </form>
  );
}
function Learn(props) {
  const workList = [];
  for (let i = 0; i < props.working.length; i++) {
    let k = props.working[i];
    workList.push(
      <div key={k.id}>
        <h2>{k.title}</h2>
        <h4>{k.body}</h4>
        <input
          type="button"
          value="삭제하기"
          onClick={() => {
            const newWorking = [];
            for (let i = 0; i < props.working.length; i++) {
              if (props.working[i].id !== k.id) {
                newWorking.push(props.working[i]);
              }
            }
            props.setWorking(newWorking);
          }}
        ></input>
        <input
          type="button"
          value="완료"
          onClick={() => {
            const newWorking = [];
            for (let i = 0; i < props.working.length; i++) {
              if (props.working[i].id !== k.id) {
                newWorking.push(props.working[i]);
              } else {
                props.working[i].ISDONE = true;
                newWorking.push(props.working[i]);
              }
            }
            console.log(newWorking);
          }}
        ></input>
      </div>
    );
  }
  return <article>{workList}</article>;
}
function Done() {}
function App() {
  const [newId, setNewId] = useState(2);
  const [working, setWorking] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해 봅시다.",
      ISDONE: false,
    },
  ]);
  return (
    <div>
      <h3>My Todo List</h3>
      <Create
        onSubmitHandle={(title, body) => {
          const newWorking = {
            id: newId,
            title: title,
            body: body,
            ISDONE: false,
          };
          const newWorkings = [...working];
          newWorkings.push(newWorking);
          setWorking(newWorkings);
          setNewId(newId + 1);
        }}
      ></Create>
      <h2>Working..💕</h2>
      <Learn working={working} setWorking={setWorking}></Learn>
      <h2>Done..!🎉</h2>
      <Done working={working} setWorking={setWorking}></Done>
    </div>
  );
}

export default App;
