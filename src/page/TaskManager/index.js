import React from 'react';
import './TaskManager.css';
import TaskSearch from '../TaskSearch';
import TaskList from '../TaskList';
import useHookStorage from './useHookStorage()';


  
function TaskManager(){
    var list= [
        { title:'Cofee', completed:false},
        { title:'Milk',  completed:true},
        { title:'Corn',  completed:false},
        { title:'Beans', completed:true}
       ];
    const [storage,saveStorage] =  useHookStorage('TODOS_V1',list);
   

      
       const [searchValue, setSearchValue] = React.useState('');
      // const [taskList, setTaskList] = React.useState(storage);
      
      
       
       
       function getsearchedTasks() 
       {
            if (!searchValue.trim().length>0) 
                    return storage; 
            return storage.filter(
                (task) => {
                const todoText = task.title.toLowerCase();
                const searchText = searchValue.toLowerCase();
                return todoText.includes(searchText);
                }
            );
        };
        const searchedTasks = getsearchedTasks();
/*
        const searchedTasks = taskList.filter(
                     (task) => {
                     const todoText = task.title.toLowerCase();
                     const searchText = searchValue.toLowerCase();
                     return todoText.includes(searchText);
                     }
                 );
             */
        
    /*  const deleteTask = (text) => {
        const newTodos = [...taskList];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.title == text
        );
        newTodos.splice(todoIndex, 1);
        
      };*/

     /*  const saveTasks = (newTodos) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
        
        setTaskList(newTodos);
      };*/
 return (
     <div id="divmain">
         <div id="divholder">TASKS MANAGER</div>
         <br/>
         <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />
         <br/>
         
         <TaskList tasks={searchedTasks} setTaskList={storage} saveTasks={saveStorage} />
         <br/>
         <br/>
        
    </div>

 );
 
    
}


export default TaskManager;