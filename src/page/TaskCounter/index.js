//import { useState } from 'react';

const taskCompletedNumber = (props) => {
                                    var completedCount=0;
                                    props.tasks.forEach(
                                                        function(task) {
                                                                        if(task.completed)
                                                                        completedCount++;
                                                        });
                                    return completedCount;            
                                        
                                 }

function TaskCounter(props){
 
 
  return(
    <center> <span>Task completed: <b> {taskCompletedNumber(props)}</b> of <b> {props.tasks.length}</b></span></center>
  );

}

export default  TaskCounter;