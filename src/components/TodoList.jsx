// import CrossIcon from "./icons/CrossIcon";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    // Podemos agregar un selector especifico con [&>article]: para que en este caso el padding x sea de 4
    <div className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: PropTypes.func,
  updateTodo: PropTypes.func,
};

export default TodoList;
