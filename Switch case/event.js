function doSomething(){
    var option=prompt("Enter colour of your choise");
    var text="";

    switch(option) {
    case "red" :
        text="You selected red "
        break;
    case "green":
        text="you selected green"
        break;
    default:
        text="i don't understand"    
    }
    document.getElementById("h_text").innerHTML=text;

    console.log("something is hit");


}