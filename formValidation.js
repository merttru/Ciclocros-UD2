const formulario = document.getElementById("formulario");

const lettersRegex = /^[a-zA-Z\s]+$/;
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const [nameElement, lastNameElement, ageElement, emailElement, subjectElement, textElement] = e.target;

  const name = nameElement.value;
  if ((name.length < 3 || name.length > 14) && !lettersRegex.test(name)) {
    console.log("Error");
  }

  const lastName = lastNameElement.value;
  if((lastName.length <=3 || lastName.length >=25) && !lettersRegex.test(lastName)){
    console.log("Error ")
  }
  const age = ageElement.value;
  if(isNaN(age) || age < 10  || age > 99){
    alert("La edad debe ser un número y estar entre 10 y 99 años.");
    return;
  }

  const email = emailElement.value;
  if((emailElement)){

  }
  const subject = subjectElement.value;
  if((subject.length >40)){
    console.log("Error")
  }
  if((textElement.length >400)){
    console.log("Error")
  }

});