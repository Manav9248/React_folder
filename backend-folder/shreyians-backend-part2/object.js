// objects

var obj = {
    name : "Manav",
    age: 20,
}

//accessing objects
console.log(obj.name);
console.log(obj['name']);

//changing value outside objects
obj.age = 12;
console.log(obj.age)

//freezing the object, so we can't change it
Object.freeze(obj);

obj.age=900;

console.log(obj.age);
