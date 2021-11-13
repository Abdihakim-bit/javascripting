let person = {
  name: "Abdihakim",
  age: 25,
  siblings: ["Aisha", "Adam"],
  gender: "male",
  isMarried: false,
  getMarried: function(){
    if (!person.isMarried){
      person.isMarried = true;
      return person.name + " has gotten married!";
    } else {
      return person.name + " is already married";
    }
  }
};
console.log(person.getMarried());
console.log(person.isMarried);