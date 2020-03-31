const asyncFunc = (callback) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('delay')
            resolve()
        }, 5000)        
    })
}

const result = asyncFunc()

result.then(() => {
    console.log('callback')
})

