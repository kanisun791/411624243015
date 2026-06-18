function example(){
    console.log("A")
}

const example1 =()=>{
    console.log("B")
}
console.log("A")
setTimeout(example,0)
setTimeout(example1,2000)
console.log("C")

const promise  = new Promise((resolve,reject)=>{
    const success = true;
    if(success){
        console.log("Done")
    }
    else{
        console.log("Fail")
    }
})
promise.then(res=>{console.log(res)})
.catch(err=>{console.log(err)})