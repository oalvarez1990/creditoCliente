// ========================Obtener datos========================
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var nitcc = document.getElementById("nitcc");
var ciudad = document.getElementById("ciudad");
var telefono = document.getElementById("telefono");
var direccion = document.getElementById("direccion");
var contacto = document.getElementById("contacto");
var cupototal = document.getElementById("cupoTotal");
var cupoDisponible = document.getElementById("CupoDisponible");
var diasGracias = document.getElementById("DiasGracias");
localStorage.setItem("id", 0);
// ========================Boton atras========================
// Obtén la referencia al botón Atras
// var btnAtras = document.getElementById("btnatras");
// Agrega un oyente para el evento click
// btnAtras.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (btnAtras.style.display === "none") {
//     btnAtras.style.display = "block";
//   } else {
//     btnAtras.style.display = "none";
//   }
//   console.log("Hola soy modal");
// });

// ========================Obtener guardar=============================
var guardar = document.getElementById("guardar");
// ========================Obtener tabla===============================
var tabla = document.getElementById("Tclientes");
// ========================Obtener boton crear=========================
var btncrear = document.getElementById("btncrear");
// ========================Obtener boton atras=========================
var btnatras = document.getElementById("btnatras");
// ========================Boton modal=================================
var createModal = document.getElementById("createModal");
// ========================Boton buscar Nit ===========================
var buscarNit = document.getElementById("btnBuscar");
// ========================Guardar datos===============================
guardar.addEventListener("click", () => {
  let idCliente = localStorage.id;
  let nombreCliente = [
    nombre.value,
    apellido.value,
    nitcc.value,
    ciudad.value,
    direccion.value,
    contacto.value,
    telefono.value,
    cupototal.value,
    cupoDisponible.value,
    diasGracias.value,
  ];
  localStorage.getItem(idCliente, nombreCliente);
  // ========================inicia interaccion con dom========================
  //   leer el localhost con un json
  localStorage.setItem(idCliente, nombreCliente);
  // crear la tabla para mostrar el contenido en el modal con innerHtml
  tabla.innerHTML += `  
        <td>${nombre.value}</td>
        <td>${apellido.value}</td>
        <td>${nitcc.value}</td>
        <td>${ciudad.value}</td>
        <td>${direccion.value}</td>
        <td>${contacto.value}</td>
        <td>${telefono.value}</td>                        
        <td>${cupoDisponible.value}</td>
        <td>${diasGracias.value}</td>       
        <td><button class="btn btn-primary" onclick="editar(this)">Editar</button></td>     
        <td><button class="btn btn-danger" onclick="eliminar(this)">Eliminar</button></td>
    </>
    `;
  //   aumentar el id para que no se repita
  localStorage.id = parseInt(idCliente) + 1;
  //   mostrar el modal
  createModal.style.display = "block";
  //   limpiar los campos
  nombre.value = "";
  apellido.value = "";
  nitcc.value = "";
  ciudad.value = "";
  direccion.value = "";
  contacto.value = "";
  telefono.value = "";
  cupototal.value = "";
  cupoDisponible.value = "";
  diasGracias.value = "";
});
// ========================Funcion editar========================
function editar(id) {
  let datos = JSON.parse(localStorage.getItem(id));
  nombre.value = datos[0];
  apellido.value = datos[1];
  nitcc.value = datos[2];
  ciudad.value = datos[3];
  direccion.value = datos[4];
  contacto.value = datos[5];
  cupototal.value = datos[6];
  cupoDisponible.value = datos[7];
  diasGracias.value = datos[8];
  telefono.value = datos[9];

  // ========================Boton editar========================
  guardar.innerHTML = "Editar";
  console.log("Hola soy editar");
  guardar.onclick = function () {
    datos[0] = nombre.value;
    datos[1] = apellido.value;
    datos[2] = nitcc.value;
    datos[3] = ciudad.value;
    datos[4] = direccion.value;
    datos[5] = contacto.value;
    datos[6] = cupototal.value;
    datos[7] = cupoDisponible.value;
    datos[8] = diasGracias.value;
    datos[9] = telefono.value;
    localStorage.setItem(id, JSON.stringify(datos));
    location.reload();
  };
}
// ========================Funcion eliminar========================
function eliminar(id) {
  localStorage.removeItem(id);
  location.reload();
}
// ========================Funcion crear========================
btncrear.addEventListener("click", () => {
  guardar.innerHTML = "Guardar";
  nombre.value = "";
  apellido.value = "";
  nitcc.value = "";
  ciudad.value = "";
  direccion.value = "";
  contacto.value = "";
  telefono.value = "";
  cupototal.value = "";
  cupoDisponible.value = "";
  diasGracias.value = "";
});
// ========================Funcion atras========================
// btnatras.addEventListener("click", () => {
//   location.href = "index.html";
//   location.reload(false);
// });
// ========================Funcion cerrar modal========================
function cerrarModal() {
  createModal.style.display = "none";
}

// ========================Funcion buscar por nombre o Nit========================
buscarNit.addEventListener("click",function(buscarNit){  
  buscarPorNombreONit(nitcc.value)  
  console.log("Hola soy buscar")

})
function buscarPorNombreONit(nombreONit) {
  // buscar las filas de la tabla
  var filas = document.querySelectorAll("#tablaClientes tr");

  // 
  var resultados = Array.from(filas).filter((fila) => {
    var nombre = fila.querySelector("td:nth-child(1)").textContent;
    var nit = fila.querySelector("td:nth-child(3)").textContent;

    return nombre.includes(nombreONit) || nit.includes(nombreONit);
  });

  // Oculta todas las filas
  filas.forEach((fila) => (fila.style.display = "none"));

  // Muestra solo las filas nit o nombre
  resultados.forEach((fila) => (fila.style.display = "table-row")); 

}

