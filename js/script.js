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
    const birthdate = document.getElementById("txtBirthdate").value;
    const hiredate = document.getElementById("txtHireDate").value;
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
        'postal code': cp,
        country: country,
        ext: ext,
        phone: phone,
        email: email,
        reportsTo: reportsTo
    };

    empleados.push(newEmpleado);
    localStorage.setItem("empleados", JSON.stringify(empleados));
}