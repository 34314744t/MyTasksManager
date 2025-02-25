import React from 'react';
//import {useEffect } from "react";
/*
function useHookStorage(name, listIni){
    const tasksLocalStorage = localStorage.getItem(name);

    let listTask; 
       
    if (!tasksLocalStorage) {
      localStorage.setItem(name, JSON.stringify(listIni));
        listTask= listIni;
    } else {
      listTask = JSON.parse(tasksLocalStorage);
    }

    const [taskStorage, setListTask] = React.useState(listTask);

    const saveTask = (newItem) => {
         console.log('ingreso save');
        localStorage.setItem(name, JSON.stringify(newItem));
        setListTask(newItem);
      };

      return [taskStorage,saveTask];
}
*/

function useHookStorage(name, listIni)
 {
    const   tasksLocalStorage = localStorage.getItem(name);
    const [taskStorage, setListTask] = React.useState([]);  
   
  
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
   // setLoading(false); 
   React.useEffect(() => {
      /* *********Load init **************/
     setTimeout(() => {
      //setLoading(false); 
    // setError(false);
    console.log('INICIANDO CARGA INICIANDO CARGA.........');
               try {    
                       
                        console.log('Init of Load...');
                         //setTimeout(() => {console.log("Load...."); }, "1500");
                         if (!tasksLocalStorage) {
                            localStorage.setItem(name, JSON.stringify(listIni));
                            setListTask(listIni);
                              setListTask(listIni);
                          } else {
                            setListTask(JSON.parse(tasksLocalStorage));
                          //  setListTask(JSON.parse(tasksLocalStorage));
                          }

                   } 
                catch (error) { 
                  console.log('Error en cargar:'+error.name+" ---> "+error.message);
                  setLoading(false);
                  setError(true);
                  }
                  finally {
                    console.log('Cargo correctamente');
                    setLoading(false); 
                  
                  }

    

                }, 3000);
                
                 

     },[]);//useEffect End
       /* *********End of Load **************/
  
      
       
      
        const saveTask = (newItem) => {
            console.log('ingreso save');
            localStorage.setItem(name, JSON.stringify(newItem));
            setListTask(newItem);
          };

     // return [taskStorage,saveTask];
      return {
        taskStorage,
        saveTask,
        loading,
        error,
      };
}
 

export default useHookStorage;