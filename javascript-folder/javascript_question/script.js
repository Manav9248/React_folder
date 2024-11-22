// console.log("hi");

let arr = []; // array
let init = 25;

var reduce = function(nums, init) {

    let len = nums.length; // length declare
    let sum = 0;

    if(len === 0 || nums[0] === 0){
        return init;
    }
    // if(nums[0] === 0){  //first case solved
    //              return init;
    //          }

    for(let i=0; i<len; i++){ // loop
   
//    if(nums[i] === 0){  // first case solved
//         return init;
//     }

        if(init>0){
            sum = (init) + nums[i]*nums[i];
             init =sum;
        }
        else{
            sum += nums[i];
    }
    }
            return sum;
};

console.log( reduce(arr,init));
