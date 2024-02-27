const formulario = document.getElementById("formulario");

const lettersRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^.+@.+..+$/;
formulario.addEventListener("submit", (e) => {
  const [nameElement, lastNameElement, ageElement, emailElement, subjectElement, textElement] = e.target;

  const name = nameElement.value;
  if ((name.length < 3 || name.length > 14) && !lettersRegex.test(name)) {
    alert("Debe ser extensión de 3 letras y menor de 14 y solo se permitirán letras.")
  }

  const lastName = lastNameElement.value;
  if((lastName.length <=3 || lastName.length >=25) && !lettersRegex.test(lastName)){
    alert("Debe ser mayor de 4 letras y menor de 30 y solo se permitirán letras. ")
  }
  const age = ageElement.value;
  if(isNaN(age) || age < 10  || age > 99){
    alert("La edad debe ser un número y estar entre 10 y 99 años.");
  }

  const email = emailElement.value;
  if((!emailElement.test(email))){
    alert("Ingrese una dirección de correo electrónico válida.")
  }
  const subject = subjectElement.value;
  if((subject.length >40)){
    alert("Hasta 40 caracteres")
  }
  const text =  textElement.value;
  const cleanedText = espacioblanco(text)
  if(cleanedText.split(" ").length > 400){
    alert("El mensaje no puede superar los 400 palabras.")
  }
});
function espacioblanco(text){
  return text.replace(/\s+/g," "); /*Sutituira todas las coincidencias del regex por espacio, podemos poner replaceAll cuando queremos buscar todas las palabras*/
}