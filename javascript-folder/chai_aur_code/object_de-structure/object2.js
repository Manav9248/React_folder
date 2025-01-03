const course = { // object created
    coursename:"js in hindi",
    price:999,
    courseInstructor:'hitesh'
}

//de-structure
//in a {}, we usually de-structure
const {courseInstructor:instructor,price:pr} = course

console.log(instructor,pr);


