import React from 'react';
import List from '../components/List';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface CompletedProps { }

const Completed: React.FC<CompletedProps> = () => {
  const todos = useSelector((state: RootState) => state.todos.todos.filter(todo => todo.completed)); // Select only completed todos
  return (
    <div className='container-xxl mt-5'>
      <div className='d-flex align-items-center pt-5 mb-2 gap-2 align-items-stretch'>
        <h4 className=''>Completed Todos</h4>
      </div>
      <List ListItemTxt={todos} completedBtn={true} /> {/* Pass the filtered todos to the List component */}

    </div>
  );
};

export default Completed;
