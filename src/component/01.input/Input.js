import "./Input.css";

const Input = (props) => {
  return (
    <div>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value; //event객체를 통해 인풋값의 벨류를 변수에 할당
          props.onSubmitHandler(title, body); //onSubmitHandler함수에 title과 body값을 넣어줌
          event.target.title.value = "";
          event.target.body.value = ""; //제출이 완료된 후 벨류값을 공백으로 설정
        }}
      >
        <span>
          <label className="content">제목</label>
          <input className="input-box" name="title" type="text" required />
          <label className="content">내용</label>
          <input className="input-box" name="body" type="text" required />
        </span>
        <input type="submit" className="button" value="추가하기" />
      </form>
    </div>
  );
};

export default Input;
