const button = document.getElementById("clickButton");
const userName = document.getElementById("userName");

const myName = document.getElementById("myname");

button.addEventListener('click', () =>{
    const value = userName.value;
    myName.innerHTML = value;
    localStorage.setItem("name", value);
})

window.addEventListener('load', ()=>{
    const value = localStorage.getItem("name");
    myName.innerHTML = value;
})