import './Task.css';

function Task({title,completed,onDeleteTask,onCrowOutTask}){
    

   
    return (
         
        <div className="taskStyle">
                
                <span className={"Icon Icon-check"+(completed?' Icon-check--active':' Icon-check--inactive')} onClick={onCrowOutTask}>
                   {(completed?'[*]':'[-]')}
                </span>
               
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={completed?' cross-out':''}> {title}</span> 
               
          <span className="Icon-delete"  onClick={onDeleteTask}  > [x] </span>
        </div>
        
    );
}

export default Task;