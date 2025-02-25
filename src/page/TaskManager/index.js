import React, { useState } from 'react';
import './TaskManager.css';
import TaskSearch from '../TaskSearch';
import TaskList from '../TaskList';
import useHookStorage from './useHookStorage()';
import { Loading } from '../Loading';
import { Modal } from '../Modal';
import { VscExpandAll } from "react-icons/vsc";
import { VscSaveAs } from "react-icons/vsc";
import { MdCancelPresentation } from "react-icons/md";

  
function TaskManager(){
    var list= [
        { title:'Cofee', completed:false},
        { title:'Milk',  completed:true},
        { title:'Corn',  completed:false},
        { title:'Beans', completed:true}
       ];
   // const [taskStorage,saveStorage] =  useHookStorage('TODOS_V1',list);
   
 const {
    taskStorage,
    saveTask:saveStorage,
    loading,
    error,
  }=  useHookStorage('TODOS_V1',list);

      //console.log("lista inicial List:"+JSON.stringify(list))
    //  console.log("lista inicial regresado:"+JSON.stringify(taskStorage));
       const [searchValue, setSearchValue] = React.useState('');
      // const [taskList, setTaskList] = React.useState(storage);
      
      function getsearchedTasks() 
       {
           
      //  if (searchValue===null)
       //    setSearchValue(" ");
        
        if (!searchValue.trim().length>0) 
                    return taskStorage; 
            return taskStorage.filter(
                (task) => {
                const todoText = task.title.toLowerCase();
                const searchText = searchValue.toLowerCase();
                return todoText.includes(searchText);
                }
            );
        };
       // console.log("Log 2");
        const searchedTasks = getsearchedTasks();
       // console.log("Log 3:"+JSON.stringify(searchedTasks));


        const [modalIsOpen, setModalIsOpen] = React.useState(false);
    
        function openModal() {
          setModalIsOpen(true);
        }
      
        function closeModal() {
          setModalIsOpen(false);
        }
         
        
        const [taskDescription,setTaskDescription]=useState("new Task");
        function onChangeDescription(event){
                 setTaskDescription(event.target.value);
        };

        function saveNewTask(){
            var newTaskJSON={title:taskDescription,completed:false};
            console.log("Agregar TAREA:---"+JSON.stringify(newTaskJSON))
            taskStorage.push(newTaskJSON);
            saveStorage(taskStorage);
            setModalIsOpen(false);
        }


 return (
     <div id="divmain">
         <div id="divholder">TASKS MANAGER</div>
         <br/>
         <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />
         <br/>
         
         <div>
          <button onClick={openModal}><span className='Icon-add--active'>Add&nbsp;<VscExpandAll /></span></button>
          {modalIsOpen && (
       
       <Modal>
        
         <div  className='add-modal'>
            <div className='add-form'>
            <form >
                <br/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;ADD NEW TASK</span><br/>
            <span>_______________________________________</span>
               <br/>
               <center>
                <span>Descripcion:<br/>
                   <textarea id="taskTitle" name="taskTitle" cols="30" rows="7"  onChange={onChangeDescription}   placeholder=" New Task Descripcion"
        ></textarea>
                </span>
                </center>
              <br/>
           <center>
            <button onClick={saveNewTask}><span className='Icon-add--active'>Save&nbsp;<VscSaveAs /></span></button>
            <button onClick={closeModal}><span className='Icon-add--active'>Close&nbsp;<MdCancelPresentation /></span></button>
            </center>
            </form>
            </div>
          </div>
        </Modal>
      )}
            
        </div>

         <Loading estado={loading}/>
         {error && <span>LOAD ERROR</span>}
         {(!loading && searchedTasks.length === 0) && <span>There are no task ¡Create your first task !</span>}
       
         <TaskList tasks={searchedTasks} setTaskList={taskStorage} saveTasks={saveStorage}  loading={loading}/>
         <br/>
         <br/>
         
    </div>

 );
 
    
}


export default TaskManager;