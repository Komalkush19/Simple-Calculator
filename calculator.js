let display=document.querySelector(".display");
let buttons=document.querySelectorAll("button");

function appendtodisplay(input){
    display.value+=input;  
    console.log(display.value);   
}



cleardisplay=()=>{
    display.value="";
}   
function calculate(){
    try{
        display.value=eval(display.value);
    }           
    catch(err){
        display.value="Error";
    } 
};  