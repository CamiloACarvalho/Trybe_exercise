export function myObject(person:{name: string, birthday: string}) {

  console.log(person.name, person.birthday);
}

function calculateAge(birthday: string) {

  const [day, month, year] = birthday.split("/");
  const today = new Date();
  today.getFullYear();
  const diffMonth = today.getMonth() + 1 - parseInt(month);
  const age = today.getFullYear() - parseInt(year);

  if(diffMonth < 0 || (diffMonth === 0 && today.getDate() < parseInt(day))) {
    return age -1
  } 
  return age;
}


export default calculateAge;