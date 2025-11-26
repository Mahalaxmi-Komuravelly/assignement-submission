let count = 0;
let setIntervalId = setInterval(() => {
    console.log("Loading...");
    count++;
    if(count === 5){
        clearInterval(setIntervalId);
        console.log("Loaded successfully!");
    }
},1000)