import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToogle }) => {
  return (
    <ul className='list-group list-group-flush'>
      {
          todos.map((item, itemIndex) => (
            <TodoListItem
              key={item.id}
              todo={item}
              index={itemIndex}
              handleDelete={handleDelete}
              handleToogle={handleToogle} />
          ))
      }
    </ul>
  )
}
