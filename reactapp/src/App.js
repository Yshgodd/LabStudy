import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; //state 사용  app을 다시 시작 하는 것 
import { getValue } from '@testing-library/user-event/dist/utils';
//사용자 정의 태그==컴포넌트
function Header(props){ 
  return <header>
    <h1><a href='/' onClick ={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
      let t = props.topics[i];
      lis.push(<li key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{ //이벤트 리스너
          event.preventDefault();
          props.onChangeMode(Number(event.target.id)); //이벤트가 발생했을 때 onChangeMode 함수 불러옴
        }}>{t.title}</a>
        </li>)
  }
  return <nav>
    <ol>
        {lis}
    </ol>
  </nav>
}

function Article(probs){
  return <article>
    <h2>{probs.title}</h2>
    {probs.body}
  </article>
}

function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title,body);
    }}>
      <p><input type='text' name ='title' placeholder='title'/></p>
      <p><textarea name='body' placeholder='body'></textarea></p>
      <p><input type='submit' value='Create'></input></p>
    </form>
  </article>
}

function Update(props){
  const [title,setTitle] = useState(props.title);
  const [body,setBody] = useState(props.body);
  
  return <article>
  <h2>Update</h2>
  <form onSubmit={event=>{
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    props.onUpdate(title,body);
  }}>
    <p><input type='text' name ='title' placeholder='title' value={title} onChange={event=>{
      setTitle(event.target.value);
    }}/></p> 
    <p><textarea name='body' placeholder='body' value={body} onChange={event=>{
      setBody(event.target.value);
    }}></textarea></p>
    <p><input type='submit' value='Update'></input></p>
  </form>
</article>
}/* props(외부-> 내부 전달 값)  state(내부에서 사용하는 값) 내부에서 변경하려면(수정) props를 state로 바꿔줄
  필요가 있음*/

function App() {
  //const _mode = useState('WELCOME'); 초기 값
  //const mode = _mode[0]; state 값
  //const setMode = _mode[1]; state 변경 함수
  const [mode,setMode] = useState('WELCOME'); // 위 3줄을 한줄로 씀
  const [id,setId] = useState('null');
  const [nextId,setNextId] = useState(4);
  const [topics,setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]);
  let content = null;
  let contextControl = null;
  if(mode ==='WELCOME'){
    content = <Article title ="Welcome" body ="Hello,Web"></Article>

  } else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title ={ title } body ={ body }></Article>
    contextControl = <li><a href={"/update/"+id} onClick={event=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
  } else if(mode === 'CREATE'){
    content = <Create onCreate = {(_title,_body)=>{
      const newTopic = {id:nextId,title:_title,body:_body}
      const newTopics = [...topics]  // 복합타입 (원시타입이 아님)인 경우 set 하여 서로 다르면 컴포넌트를 다시 렌더링
      newTopics.push(newTopic); 
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  } else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title = {title} body = {body} onUpdate = {(title,body)=>{
      const newTopics=[...topics];
      const updatedTopic = {id:id, title:title, body:body}
      for(let i =0 ; i<newTopics.length; i++){
        if(newTopics[i].id===id){
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode = {()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics = {topics} onChangeMode = {(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <ul>
        <li><a href='/create' onClick={event=>{
          event.preventDefault();
          setMode('CREATE');
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
