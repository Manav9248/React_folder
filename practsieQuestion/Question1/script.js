const arr = ["Neha","Khushi","Nidhi","Astha"];

const changeValue = document.querySelector("#hello");

// changeValue.innerHTML = "change";
   
let index = 0;

changeValue.onclick = () =>{
   changeValue.innerHTML = arr[index];
   index = (index+1) % arr.length;
}


