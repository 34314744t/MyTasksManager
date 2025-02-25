import Task from '../Task';
import './LoadingSkeletons.css'

function LoadingSkeletons({estado})
{
    if (estado)
        return(
<div className="skeletonTasks">   
    <br/><br/>      
            <div className="skeletonTask"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>
            <div className="skeletonTask"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>
            <div className="skeletonTask"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>
            <div className="skeletonTask"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>

    <br/><br/> 
</div>

            
        
       );
}
export {LoadingSkeletons};