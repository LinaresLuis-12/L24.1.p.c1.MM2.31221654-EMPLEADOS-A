const empleados = [
    { nombre: 'Juan', rol: 'obrero', salario: 100 },
    { nombre: 'Ana', rol: 'obrero', salario: 50 },
    { nombre: 'Lin', rol: 'administrativo', salario: 200 },
    { nombre: 'Mary', rol: 'obrero', salario: 50 },
    { nombre: 'Carlos', rol: 'administrativo', salario: 150 }
];

const empleadoMenorSalario = empleados.reduce((menorSalario, empleado) => {
    return empleado.salario < menorSalario.salario ? empleado : menorSalario;
});

const empleadosAdministrativos = empleados.filter(empleado => empleado.rol === 'administrativo');
const totalSalariosAdministrativos = empleadosAdministrativos.reduce((total, empleado) => total + empleado.salario, 0);
const promedioSalariosAdministrativos = totalSalariosAdministrativos / empleadosAdministrativos.length;

let salida = document.getElementById("salida");
salida.innerHTML = "Empleado con el salario más bajo: " + empleadoMenorSalario.nombre;
salida.innerHTML += "<br>Monto promedio de salarios de los empleados administrativos: " + promedioSalariosAdministrativos;