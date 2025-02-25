import './Task.css';
import { VscPassFilled } from "react-icons/vsc";
import { VscRecord } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

function Task({title,completed,onDeleteTask,onCrowOutTask}){
    

   
    return (
         
        <div className="taskStyle">
                
                <span className={"Icon Icon-check"+(completed?' Icon-check--active':' Icon-check--inactive')} onClick={onCrowOutTask}>
                {completed&&<VscPassFilled />}
                {!completed&&<VscRecord />}             
                </span>
               
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={completed?' cross-out':''}> {title}</span> 
               
          <span className="Icon-delete"  onClick={onDeleteTask}  > <VscClose /> </span>
        </div>
        
    );
}

export default Task;