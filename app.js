console.log('nodejs...')

function promise() {
    const flag = false
    return flag
}

// promise().then(() => { 
//     haed()
// })

const haed = () =>{
    console.log('seconde..')
}

if(promise()) {
    setTimeout(() => {
        console.log('time out...')
    }, 3000)
}else {
    head()
}
