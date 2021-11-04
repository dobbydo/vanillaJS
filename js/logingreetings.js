const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");

const USERNAME_KEY = "username";

function onLoginSubmit(){
    // event.prevenDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
}


const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    location.href = "../html/index.html";
}
