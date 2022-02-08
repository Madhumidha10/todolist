import logo from './logo.svg';
import './App.css';
import { useState} from 'react';


export default function App() {
  const list=[{item:"Task1"},
  {item:"Task2"},
 ];
 

 const [taskList, setTaskList] = useState(list);
 const [newtask,setNewTask]=useState("");
 const removeListItem=(index)=>
 {
  
  const copyTaskList=[...taskList];
  copyTaskList.splice(index,1)
  setTaskList(copyTaskList);
 }
 
 
  return (
    <div className="App">
     <h1>ToDoList</h1>
   <div className='form'>
  <input type="text" placeholder='New Task...' value={newtask} onChange={(e)=>setNewTask(e.target.value)} /> 
  <button onClick={()=>{
    const newTaskList={item:newtask};
  
    setTaskList([...taskList,newTaskList]);setNewTask("");}}>Add New Task</button>
  
    
    </div>
    {taskList.map(({item},index)=><ToDoList item={item}  key={index} onDelete={()=>removeListItem(index)} />)}
    </div>
  ); 
}
function ToDoList({item,index,onDelete})
{
 
  return <div className='todo'>
    <div key={index}></div>
    <span className="todo-text">
        {item} 
        <button onClick={()=>onDelete(index)}>X</button>
    </span>
  </div>
}
