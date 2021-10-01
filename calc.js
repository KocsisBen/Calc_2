let boxARR= document.querySelectorAll(".box");
//feliratkozunk a clickre;
boxARR.forEach(obj=>obj.addEventListener('click',myCalc));

function myCalc(){
    console.log(this.innerHTML);
    let x=this.innerHTML
    let boxR=document.querySelector(".boxresult")
    if(x=='C')
        boxR.innerHTML=""
    else if(x=='=') 
        boxR.innerHTML=eval(boxR.innerHTML)
    else 
        boxR.innerHTML+=x       
}