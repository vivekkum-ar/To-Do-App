import React from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { rmTodoAtIndices } from '../redux/features/addTodo/todoSlice'; // Import the rmTodo action creator

interface Todo {
  id: string;
  text: string;
}
interface ListProps {
  ListItemTxt: Todo[];
}

const List: React.FC<ListProps> = ({ ListItemTxt }) => {
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
                <Checkbox />
                <Button variant="contained" className='ms-2 bg-success' startIcon={<EditIcon />}>Edit</Button>
                <Button
                  variant="contained"
                  className='ms-2 bg-danger'
                  onClick={() => {
                    dispatch(rmTodoAtIndices([index])); // Dispatch rmTodo action with the index as payload
                  }}
                  startIcon={<DeleteIcon />}
                >
                  Delete{index}
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default List;
