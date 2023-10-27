var inserer=document.querySelector("#inserer")
var text=document.querySelector("#texte")
var input=document.querySelectorAll("input")
inserer.addEventListener("click", ()=>{
    input.forEach(element => {
    if(element.value=="rouge"){
        console.log("youpi");
    }
 
    })}
)
