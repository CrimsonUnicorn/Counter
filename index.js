const dec =document.querySelector(".btnDec");
const inc =document.querySelector(".btnInc");
const reset=document.querySelector(".btnRes");
const value= document.querySelector("#value");

var count = 0;
dec.addEventListener("click",function(){
  count=count-1 ;
value.textContent=count;
});
inc.addEventListener("click",function(){
  count=count+1 ;
value.textContent=count;
});
reset.addEventListener("click",function(){
  count=0 ;
value.textContent=count;
});
