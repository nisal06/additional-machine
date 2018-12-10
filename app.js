//get the two　elements html
const ip1 = document.getElementById('ip1');
const ip2 = document.getElementById('ip2');
const calc = document.getElementById('calc');
const rand = document.getElementById('rand');
const clr = document.getElementById('clr');
const results = document.getElementById('results');
calc.addEventListener("click", function () {
    const valOne = parseInt(ip1.value);
    const valTwo = parseInt(ip2.value);
    results.innerHTML = valOne + valTwo;
});
//clear anputs and display area

clr.addEventListener('click', function () {
    results.innerHTML = " ";
    ip1.value = " ";
    ip2.value = " ";
});

function myRandomNumber() {
    return Math.floor(Math.random() * 10000)
}
console.log(myRandomNumber());
//random bttn
rand.addEventListener('click', function () {

    ip1.value = myRandomNumber();
    ip2.value = myRandomNumber();
});