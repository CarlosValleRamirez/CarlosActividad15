const productos = ["laptop", "teléfono", "televisor", "tablet", "pantalla"];

const prodMayusculas = productos.map((producto) => producto.toUpperCase());

const prodConT = productos.filter((producto) => producto[0] === "t");

const totalLetras = productos.reduce(
  (total, producto) => total + producto.length,
  0
);

console.table(prodMayusculas);
console.table(prodConT);
console.log(totalLetras);
