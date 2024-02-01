const timeEle = document.getElementById("time");
const start = document.getElementById("start");
const reset = document.getElementById("reset");



const counter = () =>{
    let cnt =  0;
    const increamentCount = function(){
        cnt = cnt + 1;
        return cnt;
    }
    const showCount = function(){
        return cnt;
    }
    const resetCount = () =>{
        cnt = 0;
        return cnt;
    }
    return {increamentCount, showCount, resetCount};
}



const stopWatch = () =>{

    var interval;
    const c1 = counter();
    const resetStopWatch = () =>{
        c1.resetCount();
        timeEle.innerHTML = "00:00:00";
        clearInterval(interval);
        interval = null;
        start.innerText = 'START';
    }

    const toggleStopWatch = () =>{
        if(!interval){
            interval = setInterval(showDiff, 1000);
            start.innerText = "STOP"; 
        }else{
            clearInterval(interval);
            interval = null;
            start.innerText = 'START';
        }
    
    }

    function showDiff (){
        let res = c1.increamentCount();
        let hh = 0;
        let mm = 0;
        let ss = 0;
        if(res>=3600){
            hh = Math.floor(res/3600);
            res = res % 3600;
        }
        if(res >= 60){
            mm = Math.floor(res/60);
            res = res % 60;
            console.log(res);
        }
        if(res<60){
            ss = res;
        }
        if(hh<10)
            hh = "0"+hh;
        if(mm<10)
            mm = "0"+mm;
        if(ss<10)
            ss = "0"+ss;
        timeEle.innerHTML = `${hh}:${mm}:${ss}`;
        // console.log(`${hh}:${mm}:${ss}`);
    }
    return {resetStopWatch, toggleStopWatch};    
}






const myStopWatch = stopWatch();

start.addEventListener('click', myStopWatch.toggleStopWatch);
reset.addEventListener('click', myStopWatch.resetStopWatch);
