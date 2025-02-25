
import './TaskList.css';
import Task from '../Task';
import TaskCounter from '../TaskCounter';
import { LoadingSkeletons } from '../LoadingSkeletons';

function TaskList({ tasks, setTaskList,saveTasks,loading}){
  console.log("ingresando TASKKLISTTT:");
    const deleteTask = (text) => {
        const newTodos = [...tasks];
        var todoIndex = newTodos.findIndex(
          (task) => task.title === text
        );
       // console.log('Eliminar task');
        newTodos.splice(todoIndex, 1);
       // setTaskList(newTodos); se utiliza, si no existiera saveTasks
       saveTasks(newTodos);
      };

      const crowOutTask = (text) => {
        const newTodos = [...tasks];
        var todoIndex = newTodos.findIndex(
          (task) => task.title === text
        );
        newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
       // setTaskList(newTodos); se utiliza, si no existiera saveTasks
       saveTasks(newTodos);
      };
      // console.log("Antes del error"+tasks);
    return(
        
        <div>
             <TaskCounter tasks={tasks}/>
            <br/>
              <LoadingSkeletons estado={loading}/>
           
         {
           
            tasks.map(
                       (task) =>(
                                 
                                 <Task    title={task.title} completed={task.completed}  key={task.title} onDeleteTask={()=>deleteTask(task.title)} onCrowOutTask={()=>crowOutTask(task.title)}/>
                               )
                     )


         }
        </div>
    );
}

export default TaskList;