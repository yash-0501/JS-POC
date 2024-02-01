const counter = () =>{
    let cnt =  0;
    const increamentCount = function(){
        cnt++;
        return cnt;
    }
    const showCount = function(){
        return cnt;
    }
    const resetCount = () =>{
        cnt = -1;
        return cnt;
    }
    return {increamentCount, showCount, resetCount};
}


const c1 = counter();

console.log(c1.increamentCount());
console.log(c1.increamentCount());
console.log(c1.increamentCount());
console.log(c1.showCount());
console.log(c1.resetCount());
console.log(c1.showCount());
console.log(c1.increamentCount());
console.log(c1.increamentCount());
console.log(c1.increamentCount());