// function a(){
//     console.log(b);
// }

// var b = 10;
// a();


// 10

// function a(){
//     c();
//     function c(){
//         console.log(b)
//     }
// }

// var b = 10;
// a();

// 10

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b)
    }
}


a();


// 10