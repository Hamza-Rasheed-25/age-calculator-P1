const calculateID = document.getElementById("calculate");
const birthdateID = document.getElementById("birthdate");
const ageID = document.getElementById("age");

function calculateAge() {
  const birthdateValue = birthdateID.value;
  if (birthdateValue === "") {
    ageID.innerText = `Please enter your birthday`;
    ageID.classList.add("red")
  } else {
    const age = getAge(birthdateValue);
    ageID.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdateValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdateValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

calculateID.addEventListener("click", calculateAge);