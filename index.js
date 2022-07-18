const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output")

checkButton.addEventListener("click",checkNumberIsLucky)


function calculateSum(dob) {
   dob =  dob.replaceAll("-","");
   let sum =0;
   for( var i=0; i < dob.length; i++) {
     sum= sum + Number(dob.charAt(i));
   }

   return sum;
}

function checkNumberIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob); 
    compareValues(sum, luckyNumber.value)
    
}

function compareValues(sum, luckyNumber) {
    if (sum%luckyNumber === 0) {
    output.innerText="you are lucky";
    } else { 
        output.innerText="you make your own luck";
    }
}
