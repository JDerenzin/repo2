// Función para crear una tabla con un número específico de filas y columnas
function crearTabla(filas, columnas) {
    const contenedor = document.getElementById("tabla-container");
    contenedor.innerHTML = ""; // Limpiar la tabla previa

    let tabla = document.createElement("table"); // Crear la tabla

    for (let i = 0; i < filas; i++) {
        let fila = document.createElement("tr"); // Crear fila
        for (let j = 0; j < columnas; j++) {
            let celda = i === 0 ? document.createElement("th") : document.createElement("td");
            fila.appendChild(celda); // Añadir celda a la fila
        }
        tabla.appendChild(fila); // Añadir fila a la tabla
    }

    contenedor.appendChild(tabla); // Añadir tabla al contenedor
}

// Conectar el botón al evento
document.getElementById("generar-tabla").addEventListener("click", () => {
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);

    if (filas > 0 && columnas > 0) {
        crearTabla(filas, columnas);
    } else {
        alert("Por favor, introduce valores válidos para filas y columnas.");
    }
});