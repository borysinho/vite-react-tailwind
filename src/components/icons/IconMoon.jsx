import PropTypes from "prop-types";

// Establecimos el fill (relleno) para establecer el color de relleno, pero pueden venir muchas otras propiedades mas, entonces vamos a utilizar una variable llamada props donde se las va a agrupar
// Aqui se utilizan 3 conceptos de javasript que son claves:
// Desestructuracion en los parametros de la funcion, rest operator en el parametro de la funcion ...props y spread operator para sacar todo lo que contiene el objeto en {...props}

const IconMoon = ({ fill = "#fff", ...props }) => {
  return (
    <svg
      fill={fill}
      //Podemos utilizar el spread operator para sacar todos lo enviado en la variable props
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
    >
      <path
        fillRule="evenodd"
        d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
      />
    </svg>
  );
};

IconMoon.propTypes = {
  fill: PropTypes.string,
  props: PropTypes.array,
};

export default IconMoon;
