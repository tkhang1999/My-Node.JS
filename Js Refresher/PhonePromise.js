
const willIGetANewPhone = fulfilled => {
    const promise = new Promise((resolve, reject) => {
        // setTimeout(() => {
            if (fulfilled) {
                let phone = {
                    name: "Ihone X",
                    producer: "Apple",
                };
                resolve(phone);
            }
            else{
                let reason = new Error("Mom is not happy");
                reject(reason);
            }
        // }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log("Time is done!");
    willIGetANewPhone(false).then(newPhone => {
        console.log(newPhone);
    }). catch(error => {
        console.log(error.message);
    });
}, 2000);