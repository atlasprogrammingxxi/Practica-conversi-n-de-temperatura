/*Pseudocódigo de algoritmo para convertir temperatura de Celsius a Fahrenheit y Kelvin
  Inicio
  Repetir
    Escribir "Ingrese la temperatura en grados Celsius:"
    Leer temperatura
    Convertir temperatura a número
    Si temperatura no es número Entonces
      Escribir "Error: Por favor ingrese un número válido."
    FinSi
  Hasta que temperatura sea número válido
  fahrenheit = (temperatura * 9/5) + 32
  kelvin = temperatura + 273.15
  Escribir "Grados Fahrenheit: ", fahrenheit
  Escribir "Grados Kelvin: ", kelvin
Fin
*/

const form = document.getElementById('tempForm');
const input = document.getElementById('celsius');
const resultados = document.getElementById('resultados');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario recargue la página

    const valor = input.value.trim();
    const temperatura = Number(valor);

    if (valor === '' || isNaN(temperatura)) {
        resultados.innerHTML = '<p class="error">Error: Por favor ingrese un número válido.</p>';
        input.focus();
        return;
    }

    const fahrenheit = (temperatura * 9/5) + 32;
    const kelvin = temperatura + 273.15;

    resultados.innerHTML = `
        <p>Grados Fahrenheit: <strong>${fahrenheit}</strong></p>
        <p>Grados Kelvin: <strong>${kelvin}</strong></p>
    `;
});

