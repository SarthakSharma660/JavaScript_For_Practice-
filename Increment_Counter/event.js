var number=0;
var srt="script Loaded"
function changenumber(){
    document.getElementById("header").innerHTML=number
    console.log("number" + number );
}
function increment(){
    ++number
    changenumber()
}
function decrement(){
    --number
    changenumber()
}

console.log(srt);