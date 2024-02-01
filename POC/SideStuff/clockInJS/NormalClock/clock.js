function getTime(){
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    // console.log(time);
    return time;
}

const showTime = ()=>{
    const timeEle = document.getElementById("time");
    timeEle.innerHTML = getTime();
}
let interval = setInterval(showTime, 1000);

const stopBtn = document.getElementById("stop");


stopBtn.addEventListener('click', ()=>{
    if(interval){
        clearInterval(interval);
        interval = null;
    }else{
        interval = setInterval(showTime, 1000);
    }
})


