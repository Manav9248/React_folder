//fundamentals of Javascript
//arays and objects









var arr = [1,5,2,7,2,4,6,8,0];

// arr.forEach((indx,val,arr)=>{
//     console.log(val+" hello");
// })

// let newArr = arr.map((val,indx,arr)=>{
//     return val;
// })

// console.log(newArr);


// var ans = arr.filter((val,indx,arra,lop)=>{
// if(val>5){
//     return true
// }
// return false
// })

// console.log(ans);

var newArr = arr.find((val,indx,array)=>{
        if(val === 4)
            return indx;
        
})

console.log(newArr);

var ans = arr.indexOf(0);
console.log(ans);