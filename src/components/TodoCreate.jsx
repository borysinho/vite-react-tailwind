import PropTypes from "prop-types";
import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  // Inicializamos un state antes de un handle, que en este caso va corresponder al seguimiento del input
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    // Evitamos que el formulario se procese y nosotros indicamos las acciones
    e.preventDefault();

    // if (title.trim().length > 0) {
    //   createTodo(title);
    //   return setTitle("");
    // }

    if (!title.trim()) {
      // Con setTitle reiniciamos y retornamos con return
      return setTitle("");
    }

    createTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 transition-all duration-1000 dark:bg-gray-800"
    >
      {/* A los elementos de linea no se les puede aplicar altos y anchos, por lo tanto hay que transformarlo a un elemento de bloque */}
      <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-300"></span>
      <input
        type="text"
        className="w-full text-gray-400 outline-none dark:text-gray-100"
        placeholder="Create a new todo..."
        //Lo relacionamos el state con la propiedad value
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

TodoCreate.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default TodoCreate;
