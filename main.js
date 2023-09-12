function calcularFactorial() {
  /* bloque */
  /* getElementById = Funcion propia de js para seleccionar el objeto dentro del documentro a traves del id  */
  const numberFactorial = document.getElementById("inputfactorial");
  const resultado = document.getElementById("respuesta1");
  const num = parseInt(numberFactorial.value);

  if (isNaN(num) || num < 0) {
    resultado.textContent = "Por favor, ingresa un numero valido o igual a 0";
    return;
  }

  if (num === 0 || num === 1) {
    resultado.textContent = "El factorial de " + num + " es 1.";
    return;
  }

  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  resultado.textContent = "El factorial de " + num + " es " + factorial;
}
/* función para verificar palindromos */

function verificarPalidromo() {
  const inputPalindromo = document.getElementById("inputpalindromo");
  const respuesta = document.getElementById("respuesta2");
  const texto = inputPalindromo.value.toLowerCase().replace(/[^a-z]/g, "");
  if (texto === "") {
    respuesta.textContent = "Por favor , ingresa una palabra valida";
    return;
  }
  const reverse = texto.split("").reverse().join("");

  if (texto === reverse) {
    respuesta.textContent =
      "Si, la palabra " + inputPalindromo.value + ". Es un palindromo";
  } else {
    respuesta.textContent =
      "No, la palabra " + inputPalindromo.value + ". No es un palindromo";
  }
}
