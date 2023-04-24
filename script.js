let feetInputBox = document.getElementById("feetInputBox");

let inchesInputBox = document.getElementById("inchesInputBox");

feetInputBox.addEventListener("input",()=>{
    let feet = feetInputBox.value ;
    console.log(feet);
    let inches = feet *12;
    inchesInputBox.value = inches;
})
feetInputBox.addEventListener("click",()=>{
    feetInputBox.value = "";
    inchesInputBox.value = "";
})


inchesInputBox.addEventListener("input",()=>{
    
    let inches = inchesInputBox.value ;
    console.log(inches);
    let feet = inches/12;
    feetInputBox.value = feet;
})
inchesInputBox.addEventListener("click",()=>{
    inchesInputBox.value = "";
    feetInputBox.value = "";
})



