import './TaskSearch.css';
//import React, { useState } from "react";


const searchPlaceHolder="Write a frase for look a task";

function TaskSearch ({searchValue, setSearchValue}){
 // const [word, setWord] = useState('');
 // console.log("word:"+word);
  return (

               <div>
                <label name="wordSearchLabel" >Search:
                <input id="wordSearch" 
                       name="wordSearch" 
                       placeholder={searchPlaceHolder} 
                       size="50"
                      
                       onChange={(event) => {
                        //console.log("word2:"+word);
                        console.log("valor:"+event.target.value);
                        console.log("valorlogit:"+event.target.value.length);
                      
                          setSearchValue(event.target.value);
                                //  console.log("word3:"+word);
                                  //var tasks=JSON.parse(localStorage.getItem('TODOS_V1'));
                                  //const result = taskList.filter((task) =>new RegExp(event.target.value.toUpperCase()).includes(task.title.toUpperCase()));
                                //  console.log("result:"+JSON.stringify(result));
                                  //localStorage.setItem('TODOS_V1',JSON.stringify(result));
                                 
                        
                       }
                      }
                       />
                </label>

               </div>


    );



}

export default TaskSearch;