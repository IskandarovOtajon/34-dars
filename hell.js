console.log('start',new Date().getSeconds());

setTimeout(() => {
    console.log(10000);

    setTimeout(() => {
        console.log(15000);
        
    setTimeout(() => {
            console.log(20000);

    setTimeout(() => {
                console.log(25000);
                console.log("end",new Date().getSeconds());
         }, 7000)
      }, 5000)
   }, 3000)
},1000) 