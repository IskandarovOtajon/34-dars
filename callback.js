function doSomething( fn ){
    console.log('Something');
    fn()
}

doSomething(power)

function plus(){
    console.log(5+6);
}

function power(){
    console.log(5**6);
}

doSomething(() => {
    console.log('Hello World');
})