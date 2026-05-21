/**
 * 1. LÓGICA DEL FORMULARIO DE INSCRIPCIÓN
 */
function registrarUsuario(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Captura de datos obligatoria por ID
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;

    const welcomeBox = document.getElementById('welcome-message');
    const simulatorsContainer = document.getElementById('simulators-container');

    // Desplegar mensaje de éxito de inscripción
    welcomeBox.innerHTML = `¡Inscripción Exitosa! Bienvenido/a, <strong>${name}</strong> (${email}). Ya puedes usar los simuladores matemáticos abajo.`;
    welcomeBox.classList.remove('hidden');

    // Mostrar el contenedor de los simuladores requeridos
    simulatorsContainer.classList.remove('hidden');
}

/**
 * 2. EJERCICIO 1: SIMULADOR DE LEY DE ENFRIAMIENTO
 */
function calcularEnfriamiento(event) {
    event.preventDefault();

    // Captura de variables
    const t0 = parseFloat(document.getElementById('t0').value);
    const ts = parseFloat(document.getElementById('ts').value);
    const k = parseFloat(document.getElementById('k-constant').value);
    const t = parseFloat(document.getElementById('time').value);

    // Fórmula del PDF: T = Ts + (T0 - Ts) * e^(-k * t)
    const exponente = -k * t;
    const temperaturaFinal = ts + (t0 - ts) * Math.exp(exponente);

    // Redondear al entero más cercano como pide el requerimiento
    const resultadoRedondeado = Math.round(temperaturaFinal);

    // Salida de datos en contenedor visual
    const resultBox = document.getElementById('result-heat');
    resultBox.innerHTML = `La temperatura final estimada del objeto tras ${t} horas es de: <strong>${resultadoRedondeado} °C</strong>.`;
    resultBox.classList.remove('hidden');
}

/**
 * 3. EJERCICIO 2: CALCULADOR DE COMBINACIONES COMPLEJAS
 */

// Función propia para el cálculo del factorial (!) de manera recursiva
function calcularFactorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * calcularFactorial(num - 1);
}

// Función para obtener C(n, r)
function obtenerCombinaciones(n, r) {
    return calcularFactorial(n) / (calcularFactorial(r) * calcularFactorial(n - r));
}

function calcularSorteo(event) {
    event.preventDefault();

    // Captura de datos de los dos grupos autónomos
    const n1 = parseInt(document.getElementById('n1').value);
    const r1 = parseInt(document.getElementById('r1').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const r2 = parseInt(document.getElementById('r2').value);

    const resultBox = document.getElementById('result-combinations');

    // Validaciones estrictas exigidas en el punto 3 de la guía (evitar r > n u operaciones incompatibles)
    if (r1 > n1 || r2 > n2) {
        resultBox.innerHTML = `<span style="color: red;">Error de validación: El valor de (r) no puede ser mayor que (n) en ningún grupo.</span>`;
        resultBox.classList.remove('hidden');
        return;
    }

    // Calcular combinaciones de ambos grupos de forma independiente
    const combinacionesGrupo1 = obtenerCombinaciones(n1, r1);
    const combinacionesGrupo2 = obtenerCombinaciones(n2, r2);

    // Multiplicar los resultados para obtener el producto total
    const totalCombinaciones = combinacionesGrupo1 * combinacionesGrupo2;

    // Formatear la salida dinámica con separadores de miles para una vista prolija
    const formateado = totalCombinaciones.toLocaleString('es-ES');

    resultBox.innerHTML = `Total de combinaciones posibles para el sorteo: <strong>${formateado}</strong> alternativas.`;
    resultBox.classList.remove('hidden');
}