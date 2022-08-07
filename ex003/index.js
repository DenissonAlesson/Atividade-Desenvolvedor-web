let  fruits = ["Banana " , "Maçam " , "Uva"];

console.log(fruits);

fruits.push("kiwi");

console.log(fruits);

fruits.splice(0 ,1 );

console.log(fruits)
//----------------------Atividade 2 ------------------------//

const person = {
    firstName: "John",
    lastName: "Doe"

  };

//----------------------Atividade 3------------------------//

  console.log(person)

  person["country"] = "Norway" ;
  console.log(person)

  for(let num =0 ; num < 11; num++){
    console.log(num);
  }

  fruits.forEach(element => {
    console.log(element);
  });