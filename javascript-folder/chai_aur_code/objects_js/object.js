// creating objects 
// 2ways for creating objects
// new Object(), {}


// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = 12345;
tinderUser.name = 'manav';

// console.log(tinderUser);

const regularUser = { // object created
    email:"manav96544@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Manav",
            lastname:"Pal"
        }
    },

}
// console.log(regularUser.fullname.userfullname.firstname);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(regularUser.fullname.hasOwnProperty('userfullname'));
console.log(Object.keys(tinderUser).length);


