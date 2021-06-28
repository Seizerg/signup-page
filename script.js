document.getElementById("toggle").addEventListener("click",function(){
const type=  document.getElementById("password").getAttribute("type")=== "password"? "text" : "password";
document.getElementById("password").setAttribute("type",type);
this.classList.toggle("bi-eye");
})
