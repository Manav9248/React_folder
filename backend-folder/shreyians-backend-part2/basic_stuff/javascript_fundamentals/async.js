// line by line code chale toh khaenga synchronous

// sync matlab ek ka baad dusra hoga, jab tak ek command complete naa ho, dusra shuru nahi hoga


// async matlab saree kaam ek saath shuru kardo, jiska answer phale aajye uska jwaab dedna

/*
setTimeout
setInterval
promises
fetch
axios
XMLHttpRequest

*/

// setTimeout(()=>{
//     console.log("hi");
// },1000);

// setTimeout(()=>{
//     console.log("hello");
// },100);


//callbacks => function


// async code likhne ka liye
/*
fetch
axios
promises
setInterval
setTimeout
*/


// async code chalne ka liye

/*
callbacks
then catch
async wait

*/



/**
 koi bhi aesa function jsime aap async code likhenga,
 kyuki async code hai to app promises ka istemal kar skte hai, jab uska answr
 ayega toh apko then lagana padega, us then ko lagane se bachne ka liye, app async await
 ka istemaal kar skte hai. 
 
 */

async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`); // it will take time, that's why use await
    let ans = await raw.json();

    console.log(ans);
    // return ans;
}

// console.log(abcd());
abcd();


//without using async-await,the code is bigger

function abcd2(){
 fetch(`https://randomuser.me/api/`)
 .then(function(raw){
    return raw.json(); // through json, we can convert raw data into readable data
 })
 .then(function(data){
    console.log(data);
 })
}

abcd2(); // calling the second function