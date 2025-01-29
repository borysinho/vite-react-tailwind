import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(dropppableProvided) => (
        // Podemos agregar un selector especifico con [&>article]: para que en
        // este caso el padding x sea de 4
        <div
          ref={dropppableProvided.innerRef}
          {...dropppableProvided.droppableProps}
          // {...dropppableProvided.dragHandleProps}
          className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4"
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(draggableProvided) => (
                <TodoItem
                  todo={todo}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.dragHandleProps}
                  {...draggableProvided.draggableProps}
                />
              )}
            </Draggable>
          ))}
          {dropppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: PropTypes.func,
  updateTodo: PropTypes.func,
};

export default TodoList;
