window.onload = () => {
    let empleados = cargarJson();
    console.log(empleados);
}

function cargarJson() {
    var lista = localStorage.getItem("empleados");
    if (lista == null) {
        return [];
    } else {
        return JSON.parse(lista);
    }
}

function agregar() {

    let empleados = cargarJson();

    const lastName = document.getElementById("txtLastName").value;
    const nombre = document.getElementById("txtFirstName").value;
    const puesto = document.getElementById("txtTitle").value;
    const tituloDeCortecia = document.getElementById("cboTitle").value;
    
    const newEmpleado = {
        id: empleados.length +1,
        lastName: lastName,
        firstName: nombre,
        title: puesto,
        titleOfCourtesy: tituloDeCortecia
    };

    empleados.push(newEmpleado);
    localStorage.setItem("empleados", JSON.stringify(empleados));
}