var houseKeeper1 = {
  name: "Angela",
  age: 21,
  rooms: 201 - 301,
};

function houseKeeper(name, age, rooms) {
  this.name = name;
  this.age = age;
  this.rooms = rooms;
  this.clean = function () {
    alert("Hello, can i clean your room?");
    // cleanTheRoom();
  };
}

var person1 = new houseKeeper("Lisa", "21", "25");
// console.log(person1);

console.log(person1.clean());
