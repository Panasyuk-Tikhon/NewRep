console.log("hello world");

function onClick(){
    console.log('cleked');
    setTimeout(()=>{
        console.log("timeout Passed");
    }, 3000);
}
function onWait(){
    console.log("wait button clicked");
    wait(5)
}
function wait(sec) {
    console.log("start waiting");
    const start = (new Date()).getTime();
    while((new Date()).getTime() - start < sec*1000){

    }
    console.log("finish waiting");
}