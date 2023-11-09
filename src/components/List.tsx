import React from 'react'

interface ListProps {
  // Add your prop types here
  ListItemTxt: string[];
}

const List: React.FC<ListProps> = ({ListItemTxt}) => {
  return (
    <>
        <ol className="list-group list-group-numbered">
        {ListItemTxt.map((item, index) => (
            <li key={index} className="list-group-item">{item}</li>
        ))}
</ol>
    </>
  )
}

export default List