function zeroClick(){
    let printedValue=document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=printedValue+0;
}
function oneClick(){
   let printedValue= document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=printedValue+1;
}
function twoClick(){
    let printedValue=document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=printedValue+2;
}
function threeClick(){
   let printedValue= document.getElementById("Display").innerHTML;
   document.getElementById("Display").innerHTML=printedValue+3;
}
function fourClick(){
    let printedValue=document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=printedValue+4;
}
function fiveClick(){
   let printedValue= document.getElementById("Display").innerHTML;
   document.getElementById("Display").innerHTML=printedValue+5;
}
function sixClick(){
    let printedValue=document.getElementById("Display").innerHTML;
    document.getElementById("Display").innerHTML=printedValue+6;
}
function sevClick(){
   let printedValue= document.getElementById("Display").innerHTML;
   document.getElementById("Display").innerHTML=printedValue+7;
}
function eitClick(){
   let printedValue= document.getElementById("Display").innerHTML;
   document.getElementById("Display").innerHTML=printedValue+8;
}
function ninClick(){
   let printedValue= document.getElementById("Display").innerHTML;
   document.getElementById("Display").innerHTML=printedValue+9
}

function clearClick(){
    let printedValue=document.getElementById("Display").innerHTML;
    let erase=printedValue.slice(0,-1);
    document.getElementById("Display").innerHTML=erase;

}

let firstNumber;
let oprt;
let firstLength;

function pl(){
     firstNumber=document.getElementById("Display").innerHTML;
     firstLength=firstNumber.length;
     document.getElementById("Display").innerHTML=firstNumber+"+";
     oprt=1;

}


function min(){
    firstNumber=document.getElementById("Display").innerHTML;
    firstLength=firstNumber.length;
    document.getElementById("Display").innerHTML=firstNumber+"-";
    oprt=2;

}

function mul(){
    firstNumber=document.getElementById("Display").innerHTML;
    firstLength=firstNumber.length;
    document.getElementById("Display").innerHTML=firstNumber+"*";
    oprt=3;

}

function div(){
    firstNumber=document.getElementById("Display").innerHTML;
    firstLength=firstNumber.length;
    document.getElementById("Display").innerHTML=firstNumber+"/";
    oprt=4;

}

function operator(){
    let finalNumber=document.getElementById("Display").innerHTML;
    let finalLength=finalNumber.length;
    let secondNumber=parseInt(finalNumber.substring(firstLength+1));

    if(oprt==1){
        document.getElementById("Display").innerHTML=parseInt(firstNumber)+secondNumber;
    }else if(oprt==2){
        document.getElementById("Display").innerHTML=parseInt(firstNumber)-secondNumber; 
    }else if(oprt==3){
        document.getElementById("Display").innerHTML=parseInt(firstNumber)*secondNumber;
    }else if(oprt==4){
        document.getElementById("Display").innerHTML=parseInt(firstNumber)/secondNumber;
    }else{
        document.getElementById("Display").innerHTML="Invalid";
    }
}

function acClick(){
    document.getElementById("Display").innerHTML="";
}
