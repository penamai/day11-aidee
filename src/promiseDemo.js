const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("SUCCESS!");
    }, 250);
})

const myFailedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("FAILURE!");
    }, 300)
})

myPromise
    .then((message) => {
        console.log('My promise is a... ' + message)
    }).catch((message) => 
        console.log('This message should not be outputed.')
    )

myFailedPromise
    .then((message) => {
        console.log('This message should not be outputed.')
    })
    .catch((message) => {
        console.log('My failed promise is a...' + message)
    })