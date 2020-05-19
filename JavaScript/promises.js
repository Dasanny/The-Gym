let momHappy = true;

//promise

let newPhone = new Promise((resolve, reject) => {
        if(momHappy){
            let phone = {
                brand: 'Mi',
                model: '5X'
            };
            resolve(phone); //fulfilled
        } else {
            let reason = new Error('mom not happy');
            reject(reason); //reject
        }
    });

let askMom = function(){
    newPhone
        .then(fulfilled => {
           //new phone
           console.log(fulfilled);
           //output: brand...model...
       })
        .catch(error => {
            //no buy
            console.log(error.message);
            //mom not happy
       });
};

askMom();
