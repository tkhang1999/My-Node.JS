const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 1500)
    });
    return promise
}

setTimeout(() => {
    console.log("Time is done!");
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    }). then(text1 => {
        console.log(text1);
    })
}, 2000)

console.log("Hello!");
console.log("Hi!");