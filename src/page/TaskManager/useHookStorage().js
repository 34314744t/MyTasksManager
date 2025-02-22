import React from 'react';

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

export default useHookStorage;