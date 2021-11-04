const loginForm = document.querySelector("#loginForm");
const saveID = localStorage.getItem("username");

const HIDDEN_CLASSNAME = "hidden";

if(saveID === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}else{
    loginForm.classList.add(HIDDEN_CLASSNAME);
}