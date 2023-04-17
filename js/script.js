$(document).ready(function () {
    let empleados = cargarJson();
    console.log(empleados);

    $('#tblEmpleados').DataTable({
        data: empleados,
        columns: [
            { title: 'lastName' },
            { title: 'nombre' },
            { title: 'puesto' },
            { title: 'tituloDeCortecia' },
            { title: 'birthdate' },
            { title: 'hiredate' },
            { title: 'address' },
            { title: 'city' },
            { title: 'region' },
            { title: 'cp' },
            { title: 'country' },
            { title: 'ext' },
            { title: 'phone' },
            { title: 'email' },
            { title: 'reportsTo' },
        ],
    });
});

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
    const birthdate = new Date(document.getElementById("txtBirthdate").value);
    const hiredate = new Date(document.getElementById("txtHireDate").value);
    const address = document.getElementById("txtAddress").value;
    const city = document.getElementById("txtCity").value;
    const region = document.getElementById("cboRegion").value;
    const cp = document.getElementById("txtCP").value;
    const country = document.getElementById("txtCountry").value;
    const ext = document.getElementById("txtExt").value;
    const phone = document.getElementById("txtPhone").value;
    const email = document.getElementById("txtEmail").value;
    const reportsTo = document.getElementById("txtReportsTo").value;
    
    const newEmpleado = {
        id: empleados.length +1,
        lastName: lastName,
        firstName: nombre,
        title: puesto,
        titleOfCourtesy: tituloDeCortecia,
        birthdate: birthdate,
        hiredate: hiredate,
        address: address,
        city: city,
        region: region,
        postalCode: cp,
        country: country,
        ext: ext,
        phone: phone,
        email: email,
        reportsTo: reportsTo
    };

    empleados.push(newEmpleado);
    localStorage.setItem("empleados", JSON.stringify(empleados));

    // Actualizar la tabla DataTable
    const table = $('#tblEmpleados').DataTable();
    table.clear();
    table.rows.add(empleados);
    table.draw();

    //Metodo Alternativo
    // destruir la DataTable existente y volver a crearla con los nuevos datos
    // $('#tblEmpleados').DataTable().destroy();
    // $('#tblEmpleados').DataTable({
    //     data: empleados,
    //     columns: [
    //         { title: 'lastName' },
    //         { title: 'nombre' },
    //         { title: 'puesto' },
    //         { title: 'tituloDeCortecia' },
    //         { title: 'birthdate' },
    //         { title: 'hiredate' },
    //         { title: 'address' },
    //         { title: 'city' },
    //         { title: 'region' },
    //         { title: 'cp' },
    //         { title: 'country' },
    //         { title: 'ext' },
    //         { title: 'phone' },
    //         { title: 'email' },
    //         { title: 'reportsTo' },
    //     ],
    // });
}