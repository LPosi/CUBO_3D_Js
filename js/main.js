const productos = ["lampara_flor", "lampara_ondas_I", "lampara_ondas_II"];
const precios = [103500, 40200, 19600];
let carrito = [];

function mostrarProductos() {
  console.log("=== Lista de Productos Disponibles ===");
  for (let i = 0; i < productos.length; i++) {
    console.log(`${i + 1}. ${productos[i]} - $${precios[i]}`);
  }
}

function agregarAlCarrito() {
  let opcion = parseInt(
    prompt("Ingresa el número del producto que deseas comprar (1-3):")
  );

  if (opcion >= 1 && opcion <= productos.length) {
    carrito.push(precios[opcion - 1]);
    alert(`Has agregado ${productos[opcion - 1]} al carrito.`);
  } else {
    alert("Opción inválida. Intenta nuevamente.");
  }
}

function calcularTotal() {
  let total = 0;

  for (let precio of carrito) {
    total += precio;
  }

  let aplicarDescuento = confirm("¿Deseas aplicar un descuento del 10%?");
  if (aplicarDescuento) {
    total *= 0.9;
  }

  alert(`El total de tu compra es: $${total.toFixed(2)}`);
  console.log("Carrito:", carrito);
}

alert("Bienvenido al Simulador de Compras");

let continuar = true;

while (continuar) {
  mostrarProductos();
  agregarAlCarrito();
  continuar = confirm("¿Deseas agregar otro producto?");
}

calcularTotal();
