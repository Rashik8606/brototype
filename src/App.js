import { useState } from 'react';
import './App.css';


function App() {
  const [toDos, setTodos] = useState([])
  const [toDoList, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDoList} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...toDos,{id:Date.now(),text:toDoList,status:false}  ])} className="fas fa-plus"></i>
      </div>
      { toDos.map((obj) => {
        return(
          <div className="todos">
        <div className="todo">
          <div className="left">
            <input onChange={(e) => 
              {setTodos(toDos.filter(obj1 => 
              {if (obj1.id === obj.id){
                obj1.status=e.target.checked
              }
                return obj1
              }))
              }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>)        
     })}
        {toDos.map((obj)=> {
          if (obj.status){
            return(<h2>{obj.text}</h2>)
          }
          return null
        })}
    </div>
    
  );
}
export default App;
