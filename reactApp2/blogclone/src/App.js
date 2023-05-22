/* eslint-disable*/
import React ,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';




function App() {
 
  let [title, setTitle] = useState(['남자 코드 추천','리액트좋은점','으앙집 보내죠']);
  // state는 데이터가 바뀌면 이 스테이트를 담은 html을 재렌더링함
  // 자주 바뀌는 변수, 중요한 변수 등 쓰는게 좋음!(본래는 새로고침해야됨)
  let [like,setLike]= useState(0);

  // function titleSet(){ // state 값을 복사(참조 x) 후 변경 하여 원본 데이터 살림!
  //   var newArray = [...title];
  //   newArray[0] = '여자 코트 추천'
  //   setTitle( newArray );
  // }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      <div className='list'>
        <h3>{ title[0] } <span onClick={()=>{setLike(like+1)}}>👍</span>{like}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ title[1] }</h3>
        <p>2월 15일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{ title[2] }</h3>
        <p>2월 16일 발행</p>
        <hr/>
      </div>

      <Modal/> 

    </div>
  );
}

function Modal(){  
  // app 과 같은 위치 , html을 덩어리로 관리 가능 . 
  // 컴포넌트이름은 대문자 , 컴포넌트 안에 컴포넌트 사용 가능                  
  //리턴 소괄호 안에 html but div태그 하나에 묶어야함 <>라는 프래그먼트 사용가능
  //컴포넌트는 반복적인 문장이 나올 때 사용하면 좋음 
  // 자주 바뀌는 html ui들은 컴포넌트로 만들어 성능을 올림 
  // 다른 페이지를 만들 때도 컴포넌트 사용 , 단점: state는 지역변수이기 때문에 app안에 컴포에게 변수 전달해야함
  return(
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
