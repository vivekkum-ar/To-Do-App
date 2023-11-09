import React from 'react'
import List from '../components/List'

interface HomeProps {
  // Add your prop types here
}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className='container-xxl pt-2'>
        <List ListItemTxt={["Item 1", "Item 2", "Item 3"]}></List>
    </div>
  )
}

export default Home