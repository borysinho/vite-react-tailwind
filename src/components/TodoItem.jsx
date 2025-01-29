import IconCross from "./icons/IconCross";
import PropTypes from "prop-types";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;
  return (
    // <article className="flex gap-4 border-b-1 border-b-gray-300 dark:bg-gray-800">
    <article className="flex gap-4 border-b-1 border-b-gray-300">
      {/* Al utilizar flexbox utilizamos justify-center para alinearlo en el eje central (debido a que no hemos cambiado la direccion, por defecto va en horizontal o en row)y con la propiedad items-center modificamos el eje que no se configura, que en este ejemplo es el vertical */}
      <button
        className={`h-5 w-5 flex-none rounded-full ${
          completed
            ? "to-pink-5h-5 00 flex w-5 items-center justify-center border-0 bg-gradient-to-r from-indigo-500 via-purple-500"
            : "inline-block border-2 border-gray-300"
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <IconCheck />}
      </button>
      {/* Con grow (propiedad de flex) podemos hacer que este elemento crezca y estableciendo la propiedad en none de los otros elementos, el unico que crecera sera este */}
      <p
        className={`grow ${completed ? "text-gray-300 line-through dark:text-gray-400" : "dark: text-gray-600 dark:text-gray-100"}`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func,
  updateTodo: PropTypes.func,
};

export default TodoItem;
