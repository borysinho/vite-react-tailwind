// Para que las clases de Tailwind se ordenen automaticamente: npm install -D prettier prettier-plugin-tailwindcss

import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

// const initialStateTodos = [
//   {
//     id: 1,
//     title: "Go to the gym",
//     completed: true,
//   },
//   {
//     id: 2,
//     title: "Complete JavaScript tutorial",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "10 minutes meditation",
//     completed: true,
//   },
//   {
//     id: 4,
//     title: "Dashboard elaboration",
//     completed: false,
//   },
//   {
//     id: 5,
//     title: "Frontend mentor end finish",
//     completed: false,
//   },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      // Cambiar el ID
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    // bg-cover permite cubrir todo el elemento, bg-contain permite ajustar el contenido a tu tamano personalizado como bg-auto o bg-50%
    <div className="min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      {/* mx-auto margen ixq y derecha en automatico. px-4 es padding-x de 4*/}
      <Header />
      {/* Se re estructura para hacer que todo el main tenga el apartado de los todos */}
      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          // En lugar de mostrar la lista de todos, enviamos el filtro
          todos={filteredTodos()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />

        {/* En este caso no pasaremos la funcion para que se ejecute en otro componente, enviaremos el resultado de la ejecucion porque nada mas nos devuelve un numero, de esta manera utilizamos los parentesis para enviar la ejecucion y no la funcion */}
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />

        {/* Como el estado "filter" se encuentra en el mismo componente, entonces podemos ejecutar directamente la funcion sin necesidad de enviarla al componente */}
        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="mt-8 text-center transition-all duration-1000 dark:text-gray-400">
        Drag and Drop to reorder list
      </footer>
    </div>
  );
};

export default App;
