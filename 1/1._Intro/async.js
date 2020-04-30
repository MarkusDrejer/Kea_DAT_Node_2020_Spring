function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("The promise is done");
        }, 5000);
    });
}

async function callMyPromise() {
    const message = await myPromise();
    console.log(message);
}

callMyPromise();