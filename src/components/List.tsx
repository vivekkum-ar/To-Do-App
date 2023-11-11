import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { markCompTodoAtIndices, rmTodoAtIndices } from '../redux/features/addTodo/todoSlice'; // Import the rmTodo action creator
import CheckIcon from '@mui/icons-material/Check';
import { Snackbar } from '@mui/material';

interface Todo {
  id: string;
  text: string;
  completed?: boolean;
}
interface ListProps {
  ListItemTxt: Todo[];
  completedBtn?: boolean;
}

const List: React.FC<ListProps> = ({ ListItemTxt,completedBtn }) => {
  const [open, setopen] = useState({
    openCompleted: false,
    openDeleted: false
  });
  useEffect(() => {
    setTimeout(() => {
      setopen({...open,openCompleted: false, openDeleted: false});
    }, 3000);
  
  }, [open]);
  
  // const todos = useSelector((state: RootState) => state.todos); // Select todos from the todos slice
  const dispatch = useDispatch<AppDispatch>(); // Dispatch type is inferred from AppDispatch

  return (
    <>
      <ol className="list-group list-group-numbered">
        {ListItemTxt.map((item, index) => (
          <li className="d-flex border-bottom p-2 align-items-center justify-content-between" key={index}>
            <div className="">
              <div>{item.text}</div> {/* Render the text property of the Todo object */}
            </div>
            <div className="form-check d-flex align-items-center">
              <div className="d-grid gap-2 d-md-block">
                {/* <Checkbox /> */}
                {/* <Button variant="contained" className='ms-2 bg-success' startIcon={<EditIcon />}>Edit</Button> */}
                <Button variant="contained" className='ms-2 bg-success' hidden={completedBtn} startIcon={<CheckIcon />} onClick={() => {dispatch(markCompTodoAtIndices([index]))
                  setopen({...open,openCompleted: true});
                }}>Completed</Button>
                <Button
                  variant="contained"
                  className='ms-2 bg-danger'
                  onClick={() => {
                    dispatch(rmTodoAtIndices([index])); // Dispatch rmTodo action with the index as payload
                    setopen({...open,openDeleted: true});
                  }}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <Snackbar
        anchorOrigin={{vertical: "bottom", horizontal: "right"}}
        open={open.openCompleted}
        // onClose={handleClose}
        message="Added to completed todos!"
        key={"Completed"}
      />
      <Snackbar
        anchorOrigin={{vertical: "bottom", horizontal: "right"}}
        open={open.openDeleted}
        // onClose={handleClose}
        message="Deleted from list!"
        key={"Deleted"}
      />
    </>
  );
};

export default List;
