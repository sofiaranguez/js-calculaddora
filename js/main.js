//proyecto de bingo , 2da pre entrega//

let numinicial = 1, numfinal = 75
let sigue, letra
do {
    numero = Math.round(Math.random() * (numinicial - numfinal) + numfinal);
    if (numero >= 1 && numero <= 15) letra = "B"
    if (numero >= 16 && numero <= 30) letra = "I"
    if (numero >= 31 && numero <= 45) letra = "N"
    if (numero >= 46 && numero <= 60) letra = "G"
    if (numero >= 61 && numero <= 75) letra = "O"

    console.log(letra + numero);

    sigue = prompt("Desea sacar una bolilla? S/N")
} while (sigue == "S" || sigue == "s")



// registro de asistencias // no terminado


// Definir una función de orden superior para crear el registro de asistencias
function crearRegistro() {
    let asistencias = {};

    return function (alumno) {
        if (!asistencias[alumno]) {
            asistencias[alumno] = 1;
        } else {
            asistencias[alumno]++;
        }

        console.log(`Asistencia registrada para ${alumno}`);
        console.log(`Número total de asistencias para ${alumno}: ${asistencias[alumno]}`);
    };
}

// Crear el registro de asistencias
const tomarAsistencia = crearRegistro();

// Tomar asistencias para los alumnos usando prompt
while (true) {
    const alumno = prompt('Ingresa el nombre del alumno (o presiona Cancelar para terminar):');

    if (alumno === null) {
        break; // Salir del bucle si se presiona Cancelar
        // Array de productos
        const productos = [
            { id: 1, nombre: 'Camiseta', precio: 20 },
            { id: 2, nombre: 'Pantalón', precio: 40 },
            { id: 3, nombre: 'Zapatos', precio: 60 },
            { id: 4, nombre: 'Bolso', precio: 30 }
        ]

        // Función para mostrar todos los productos
        const mostrarProductos = () => {
            console.log('Productos disponibles:');
            productos.forEach(producto => {
                console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
            });
        };

        // Función para buscar un producto por ID
        const buscarProductoPorId = id => productos.find(producto => producto.id === id);

        // Función para agregar un producto al carrito
        const agregarAlCarrito = id => {
            const producto = buscarProductoPorId(id);
            if (producto) {
                carrito.push(producto);
                console.log(`Producto "${producto.nombre}" agregado al carrito.`);
            } else {
                console.log('Producto no encontrado.');
            }

            tomarAsistencia(alumno);
        }

    };

    // Función para calcular el total del carrito
    const calcularTotalCarrito = () => {
        let total = 0;
        carrito.forEach(producto => {
            total += producto.precio;
        });
        return total;
    };

    // Array para almacenar los productos del carrito
    const carrito = [];

    // Iniciar el e-commerce
    const iniciarEcommerce = () => {
        mostrarProductos();

        let continuar = true;
        while (continuar) {
            const opcion = parseInt(prompt('Ingrese el ID del producto que desea agregar al carrito (0 para salir):'));
            if (opcion === 0) {
                continuar = false;
            } else {
                agregarAlCarrito(opcion);
            }
        }

        const totalCarrito = calcularTotalCarrito();
        console.log(`Total del carrito: $${totalCarrito}`);
    };

    // Iniciar el e-commerce
    iniciarEcommerce();
