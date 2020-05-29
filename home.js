// Course on java script from https://www.youtube.com/watch?v=Qqx_wzMmFeA

console.log('hello'); //writes to console, but not visible on page
// alert('message popup') //sends popup immediately

//var age = prompt('What is your age?'); //input box
//document.getElementById('someText').innerHTML = 'hey there are you really ' + age + ' years old?'; // modify text

//functions in js
function greeting() {
    var name = prompt('What is your name');
    var result = 'Hello ' + name;
    console.log(result);
}
greeting(); //calling the function