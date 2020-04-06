function promise() {
    const flag = false
    return flag
}

const haed = () =>{
    console.log('second.')
}
if(promise()) {
    setTimeout(() => {
        console.log('time out...')
    }, 3000)
}else {
    head()
}

