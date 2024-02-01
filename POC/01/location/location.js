const btn = document.getElementById("get-location");

btn.addEventListener('click', ()=>getLocation());

const gotLocation = (pos) =>{
    console.log(pos);
}

const failedToGet = () => {
    console.log("There was some error");
}

const getLocation = async () =>{
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
}