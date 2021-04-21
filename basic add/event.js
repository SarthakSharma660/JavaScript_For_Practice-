

// Number(r);
function add (){
    var n1=document.getElementById("no1").value;
    n1=Number(n1)
    var n2=document.getElementById("no2").value;    
    n2=Number(n2)
    var r=n1+n2;
    document.getElementById("result").value=r; 
}
function Sub (){
    var n1=document.getElementById("no1").value;
    n1=Number(n1)
    var n2=document.getElementById("no2").value;    
    n2=Number(n2)
    var r=0;
    if (n1>n2){
        r=n1-n2;
    }else{
        r=n2-n1;
    }
    document.getElementById("result").value=r; 
}
function multi (){
    var n1=document.getElementById("no1").value;
    n1=Number(n1)
    var n2=document.getElementById("no2").value;    
    n2=Number(n2)
    var r=n1*n2;
    document.getElementById("result").value=r; 
}
function divide (){
    var n1=document.getElementById("no1").value;
    n1=Number(n1)
    var n2=document.getElementById("no2").value;    
    n2=Number(n2)
    var r=n1/n2;
    document.getElementById("result").value=r; 
}