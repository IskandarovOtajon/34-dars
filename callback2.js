function op(fn){
    fn(1,2)
}

op((a,b) => {
    console.log(a+b);
})

op((a,b) => {
    console.log(a*b);
})

function ifthen(can,f1,f2){
    if(con){
        fn1()
    }
    else{
        fn2()
    }
}

ifthen(
    5>10,
    () => {
        console.log('Hammasi zor');
    },
    () => {
        console.log('oylab gor');
    }
)