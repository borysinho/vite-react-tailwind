// Para que las clases de Tailwind se ordenen automaticamente: npm install -D prettier prettier-plugin-tailwindcss

import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/Moon";

const App = () => {
  return (
    // bg-cover permite cubrir todo el elemento, bg-contain permite ajustar el contenido a tu tamano personalizado como bg-auto o bg-50%
    <div className="min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      {/* mx-auto margen ixq y derecha en automatico. px-4 es padding-x de 4*/}
      <header className="container mx-auto px-4 pt-8">
        {/* Con el justify-between podemos mandarlos a los extremos */}
        <div className="flex justify-between">
          {/* letter-spacing de CSS en tailwind es tracking-*/}
          <h1 className="text-3xl font-semibold tracking-[0.3em] text-white uppercase">
            Todo
          </h1>
          <button>
            {/* Mandamos el className como props */}
            <MoonIcon className="fill-red-400" />
          </button>
        </div>
        {/* Con overflow-hidden hacemos que el contenido no se escape del contenedor */}
        {/* Con flex, para alinearlos verticalmente podemos utilizar Item-Center */}
        <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
          {/* A los elementos de linea no se les puede aplicar altos y anchos, por lo tanto hay que transformarlo a un elemento de bloque */}
          <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-300"></span>
          <input
            type="text"
            className="w-full text-gray-400 outline-none"
            placeholder="Create a new todo..."
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        {/* Podemos agregar un selector especifico con [&>article]: para que en este caso el padding x sea de 4 */}
        <div className="rounded-md bg-white [&>article]:p-4">
          <article className="flex gap-4 border-b-1 border-b-gray-300">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2 border-gray-300"></button>
            {/* Con grow (propiedad de flex) podemos hacer que este elemento crezca y estableciendo la propiedad en none de los otros elementos, el unico que crecera sera este */}
            <p className="grow text-gray-600">
              Complete online Havascript course
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b-1 border-b-gray-300">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2 border-gray-300"></button>
            {/* Con grow (propiedad de flex) podemos hacer que este elemento crezca y estableciendo la propiedad en none de los otros elementos, el unico que crecera sera este */}
            <p className="grow text-gray-600">
              Complete online Havascript course
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b-1 border-b-gray-300">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2 border-gray-300"></button>
            {/* Con grow (propiedad de flex) podemos hacer que este elemento crezca y estableciendo la propiedad en none de los otros elementos, el unico que crecera sera este */}
            <p className="grow text-gray-600">
              Complete online Havascript course
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="flex justify-between px-4 py-4">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 rounded-md bg-white p-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <p className="mt-8 text-center">Drag and Drop to reorder list</p>
    </div>
  );
};

export default App;
