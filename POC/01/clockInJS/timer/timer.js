const btn = document.getElementById("timer-btn");
const reset = document.getElementById("reset");
const hh = document.getElementById("hours");
const mm = document.getElementById("minutes");
const ss = document.getElementById("seconds");

const form = document.getElementById("input-time");

const hhEle = document.getElementById("hh");
const mmEle = document.getElementById("mm");
const ssEle = document.getElementById("ss");

const validateInput = (ele) => {
    const err_msg = document.getElementById("error-message-"+ele.id);
    if(ele.id == 'hours'){
        if(ele.value < 0 || ele.value > 23){
            err_msg.textContent  = "Please enter a value between 0 and 23.";
            btn.disabled = true;
        }else{
            err_msg.textContent  = "";
        }
    }else{
        if(ele.value < 0 || ele.value > 59){
            err_msg.textContent  = "Please enter a value between 0 and 59.";
            btn.disabled = true;
        }else{
            err_msg.textContent  = "";
        }
    }
    if(checkValues() == true){
        btn.disabled = false;
    }
}

const checkValues = () =>{
    
    if(hh.value<0 || hh.value>23){
        const err_msg = document.getElementById("error-message-hours");
        err_msg.textContent  = "Please enter a value between 0 and 23.";
        btn.disabled = true;
        return false
    }
    if(ss.value < 0 || ss.value > 59){
        const err_msg = document.getElementById("error-message-seconds");
        err_msg.textContent  = "Please enter a value between 0 and 59.";
        btn.disabled = true;
        return false
    }
    if(mm.value < 0 || mm.value> 59){
        const err_msg = document.getElementById("error-message-minutes");
        err_msg.textContent  = "Please enter a value between 0 and 59.";
        btn.disabled = true;
        return false
    }
    return true;
    
}

const counter = (initialVal = 0) =>{
    let cnt =  initialVal;
    const decrementCount = function(){
        cnt = cnt - 1;
        return cnt;
    }
    const showCount = function(){
        return cnt;
    }
    const resetCount = () =>{
        cnt = 0;
        return cnt;
    }
    return {decrementCount, showCount, resetCount};
} 

const checkNaN = () =>{
    if(hh.value == ""){
        hh.value = '0';
    }
    if(mm.value == ""){
        mm.value = '0';
    }
    if(ss.value==""){
        ss.value = '0';
    }
}

const Timer = () =>{
    
    let c1;
    let interval;
    
    const resetTimer = () =>{
        c1.resetCount();
        form.style.display = 'Block'
        clearInterval(interval);
        interval = null;
        btn.innerText = 'START';
        hh.value = "00";
        mm.value = "00";
        ss.value = "00";
        hhEle.innerHTML = "00";
        mmEle.innerHTML = "00";
        ssEle.innerHTML = "00";
    }

    const startTimer = () =>{
        checkNaN();
        let hoursValue = parseInt(hh.value, 10);
        hoursValue = Math.floor(hoursValue*3600);
        let minutesValue = parseInt(mm.value, 10);
        minutesValue = Math.floor(minutesValue*60);
        let secondsValue = parseInt(ss.value, 10);

        const total = hoursValue + minutesValue + secondsValue; 
        if(total <= 0){
            alert("Enter Valid Time!")
            return;
        }
        c1 = counter(total);

        if(!interval){
            form.style.display = 'None';
            interval = setInterval(showTimer, 1000);
            btn.innerText = "PAUSE"; 
        }else{
            hh.value = hhEle.innerText;
            mm.value = mmEle.innerText;
            ss.value = ssEle.innerText;
            form.style.display = 'Block'
            clearInterval(interval);
            interval = null;
            btn.innerText = 'START';
        }
    } 

    const showTimer = () => {
        let res = c1.decrementCount();
        if(res == 0){
            form.style.display = 'Block'
            clearInterval(interval);
            interval = null;
            btn.innerText = 'START';
            hh.value = "00";
            mm.value = "00";
            ss.value = "00";
        }
        let hhVal = 0;
        let mmVal = 0;
        let ssVal = 0;
        if(res>=3600){
            hhVal = Math.floor(res/3600);
            res = res % 3600;
        }
        if(res >= 60){
            mmVal = Math.floor(res/60);
            res = res % 60;
        }
        if(res<60){
            ssVal = res;
        }
        if(hhVal<10)
            hhVal = "0"+hhVal;
        if(mmVal<10)
            mmVal = "0"+mmVal;
        if(ssVal<10)
            ssVal = "0"+ssVal;
        hhEle.innerHTML = `${hhVal}`;
        mmEle.innerHTML = `${mmVal}`;
        ssEle.innerHTML = `${ssVal}`;
    }

    return {startTimer,resetTimer}

}

const myTimer = Timer();

btn.addEventListener("click", myTimer.startTimer);
reset.addEventListener("click", myTimer.resetTimer);

