import React from 'react'
import List from '../components/List'
import { Button, TextField } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
interface HomeProps {
    // Add your prop types here
}

const Home: React.FC<HomeProps> = ({ }) => {
    return (
        <div className='container-xxl mt-5'>
            <div className='d-flex align-items-center pt-5 mb-2 gap-2 align-items-stretch'>
                <TextField id="outlined-basic" fullWidth={true} label="Outlined" variant="outlined" />
                <Button variant="contained" endIcon={<AddBoxIcon />}>
                    Add
                </Button>
            </div>
            <List ListItemTxt={["Item ", "Item ", "Item ", "Item ", "Item ", "Item ", "Item ", "Item ", "Item ", "Item ", "Item ", "Item ", "Item ", "Item ", "Item ",]}></List>
        </div>
    )
}

export default Home