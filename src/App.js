import './App.css';
import {useState} from 'react';
import {Task} from "./Task";


//2 parts-
//1-> input 
//2->


function App() {
  const [todoList,setTodoList]= useState([]);
  const [newTask,setNewTask]= useState("");

  
  
  const handleChange=(event)=>{
    setNewTask(event.target.value);
  };

  const addTask=()=>{
    const task={
      id: todoList.length===0?1:todoList[todoList.length-1].id +1,
      taskName:newTask,
      completed: false,
    };
    /*const newTodoList= [...todoList, newTask];
    created a variable id for each task
    */
    setTodoList(task.taskName!==""?[...todoList,task]:todoList);
  };

  const deleteTask=(id)=>{
    const newTodoList= todoList.filter((task)=>{
      return task.id!==id;
      /* 
     /* if(task===taskName){
        return false;

      }else{
        return true;
      }*/
    }) ;

    setTodoList(newTodoList);

  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

 
  return (
    <div className="App">
      <div className='heading'>
        <h1>To Do List</h1>

        </div>
      <div className="addTask">
        
        
        
        <input className='ip' onChange={handleChange}/>
        <div className='bttn'>
        <button className='btn' onClick={addTask}>Add Task</button>


        </div>
      </div>

      <div className='list'>
        {todoList.map((task)=>{
          return (
          <Task 
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
          );
        })}
      </div>
    </div>
  );
}

export default App;
