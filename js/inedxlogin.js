//loginBtn clock
const loginBtn = document.querySelector("#loginBtn");

function movePage(){
    location.href = "../html/login.html";
}

loginBtn.addEventListener("click",movePage);

//logout

const logout = document.querySelector("#logoutBtn");
const loginInput = document.querySelector("#loginForm input");
const saveUsername = localStorage.getItem("username");
 

function logouts(){
    localStorage.removeItem("username");
    location.reload();
}

//paint
const greeting = document.querySelector("#greeting");

function paintGreeting(saveUsername){
    greeting.innerText = `ID : ${saveUsername}`;
}

function hidden(){
    if(saveUsername === null){
        logout.classList.add("hidden");
    }else{
        logout.classList.remove("hidden");
        paintGreeting(saveUsername);
    }
}

logout.addEventListener("click", logouts);
hidden();