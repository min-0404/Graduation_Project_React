import World from "./World";
import { useState } from "react"; // 상태 처리 위해 사용

export default function Hello(){
    function showName(){
        console.log("Mike");
    }
    function showAge(age){
        console.log(age);
    }
    function showText(e){ // 입력된 e값을 바로 콘솔창에 띄워준느 함수
        console.log(e.target.value);
    }
    
    const [name, setName] = useState("Mike"); // 자바스크립트 기술
    function changeName(){
        const newName = name == "Mike" ? "Jane" : "Mike";
        setName(newName);
    }


    return(
      <div>
          <h1>Hello!!!</h1>
          <World/>

          {/* 함수 호출법 1 */}
          <button onClick={showName}>Show Name</button>
          {/* 함수 호출법 2 : 매개변수 전달*/}
          <button onClick={()=>{
              showAge(40)
          }}>Show Age</button>

          {/* 함수 호출법 1 */}
          <input type="text" onChange={showText}></input>
          {/* 함수 호출법 2 */}
          <input type="text" onChange={(e)=>{
              console.log(e.target.value)
          }}></input>

          {/* useState 사용하기 */}
          <h2 id="name">{name}</h2>
          <button onClick={changeName}>이름을 바꾸는 버튼</button>
      </div>  
    );
}