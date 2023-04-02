window.onload = () => {
    let productos = cargarJson();
    console.log(productos);
}

function cargarJson() {
    var lista = localStorage.getItem("productos");
    if (lista == null) {
        return [];
    } else {
        return JSON.parse(lista);
    }
}

function autoIncrement() {
    let productos = cargarJson();

    if (productos[0]["id"]) {
        return 1;
    } else {
        return productos[0]["id"]++;
    }
}

function agregar() {

    let productos = cargarJson();
    let nuevo = {};
    nuevo.id = autoIncrement();
    nuevo.lastName = document.getElementById("txtLastName").value;
    productos.push(nuevo);
    localStorage.setItem("productos", JSON.stringify(productos));
    console.log(productos);
}