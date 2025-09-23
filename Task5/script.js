let counter = 0;
let intervalId = setInterval(() => {
    counter++;

    const now = new Date();
    console.log("Current time:", now.toLocaleTimeString('en-GB'));

    if (counter == 10) {
        clearInterval(intervalId);
        console.log("Alarm ringing!");

        setTimeout(() => {
            console.log("The clock has stopped. Have a great day!");
        }, 5000);
    }
}, 1000)