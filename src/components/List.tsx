import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface ListProps {
  // Add your prop types here
  ListItemTxt: string[];
}

const List: React.FC<ListProps> = ({ ListItemTxt }) => {
  return (
    <>
      <ol className="list-group list-group-numbered">
        {ListItemTxt.map((item, index) => (
          <li className="d-flex border-bottom p-2 align-items-center justify-content-between">
            <div className="">
              <div key={index} className="">{item + index}
              </div>
            </div>
            <div className="form-check d-flex align-items-center">
              <div className="d-grid gap-2 d-md-block">
                {/* <Checkbox defaultChecked /> */}
                <Checkbox  />
                <Button variant="contained" className='ms-2 bg-success' startIcon={<EditIcon />}>Edit</Button>
                <Button variant="contained" className='ms-2 bg-danger' startIcon={<DeleteIcon />}>Delete</Button>
              </div>
            </div>
          </li>

        ))}
      </ol>
    </>
  )
}

export default List