const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P1 success"),3000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P2 success"),5000);
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P3 success"),2000);
    // setTimeout(()=>reject("P3 FAIL"),2000);
})

const p4 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P4 success"),3000);
    setTimeout(()=>reject("P4 FAIL"),3000);
})

const p5 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P5 success"),1000);
    setTimeout(()=>reject("P5 FAIL"),1000);
})

const p6 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P6 success"),2000);
    setTimeout(()=>reject("P6 FAIL"),2000);
})

// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// [ 'P1 success', 'P2 success', 'P3 success' ]


// Promise.all([p4,p5,p6]).then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
// })

// P6 FAIL


// Promise.allSettled([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// [
//     { status: 'fulfilled', value: 'P1 success' },
//     { status: 'fulfilled', value: 'P2 success' },
//     { status: 'fulfilled', value: 'P3 success' }
//   ]



// Promise.allSettled([p4,p5,p6]).then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
// })

// [
//     { status: 'fulfilled', value: 'P4 success' },
//     { status: 'fulfilled', value: 'P5 success' },
//     { status: 'rejected', reason: 'P6 FAIL' }
// ]


// Promise.race([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// P2 success


// Change p2 to 5000 and p3 to 1000 Fail

// Promise.race([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// P3 FAIL


// Promise.any([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// // P3 success


// P5 Fail & P6 fail

// Promise.any([p4,p5,p6]).then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
// })

// p4 success


// ALL fail

Promise.any([p4,p5,p6]).then(res=>{
    console.log(res);
}).catch((err)=>{
    console.error(err);
})

// [AggregateError: All promises were rejected] {
//   [errors]: [ 'P4 FAIL', 'P5 FAIL', 'P6 FAIL' ]
// }