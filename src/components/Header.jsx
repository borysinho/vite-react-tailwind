import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const inicialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
  // Usamos un state para renderizar el boton
  const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

  // Usamos useEffect para estar pendiente del cambio de algun estado
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 pt-8 md:max-w-xl">
      {/* Con el justify-between podemos mandarlos a los extremos */}
      <div className="flex justify-between">
        {/* letter-spacing de CSS en tailwind es tracking-*/}
        <h1 className="text-3xl font-semibold tracking-[0.3em] text-white uppercase">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
      {/* Con overflow-hidden hacemos que el contenido no se escape del contenedor */}
      {/* Con flex, para alinearlos verticalmente podemos utilizar Item-Center */}
    </header>
  );
};

export default Header;
