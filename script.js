const hamburger= document.getElementById("btn");
const menu =document.getElementById("menulist");
console.log(menu)
hamburger.addEventListener("click",()=>{
   if(menu.classList.contains("hidden")){
    menu.classList.remove("hidden")
   }else{
    menu.classList.add("hidden")
   }
})