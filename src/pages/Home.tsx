import React, { useEffect, useState } from 'react';
import List from '../components/List';
import { Button, Snackbar, TextField } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store'; // Import RootState and AppDispatch types
import { addTodoFromText } from '../redux/features/addTodo/todoSlice';  // Import addTodo action creator

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [todoText, setTodoText] = useState('');
  const [openAdd, setopenAdd] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setopenAdd(false);
    }, 3000);
  
  }, [openAdd]);
//   const todos = useSelector((state: RootState) => state.todos.todos); // Select todos from the correct slice
  const todos = useSelector((state: RootState) => state.todos.todos.filter(todo => !todo.completed)); // Select only incomplete todos

  const dispatch = useDispatch<AppDispatch>(); // Dispatch type is inferred from AppDispatch

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      dispatch(addTodoFromText(todoText)); // Dispatch addTodo action with the todo text
      setTodoText(''); // Clear the input after adding todo
        setopenAdd(true);
    }
  };

  return (
    <div className='container-xxl mt-5'>
      <div className='d-flex align-items-center pt-5 mb-2 gap-2 align-items-stretch'>
        <TextField
          id='outlined-basic'
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          fullWidth={true}
          label='Enter todo here'
          variant='outlined'
        />
        <Button variant='contained' onClick={handleAddTodo} endIcon={<AddBoxIcon />}>
          Add
        </Button>
      </div>
      <List ListItemTxt={todos} />
      <Snackbar
        anchorOrigin={{vertical: "bottom", horizontal: "right"}}
        open={openAdd}
        // onClose={handleClose}
        message="Added todo to list!"
        key={"Added"}
      />
    </div>
  );
};

export default Home;
