let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function convert(){
            return promise = new Promise(function(resolve, reject){
                let request = new XMLHttpRequest();
                request.open('GET', 'js/current.json');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                request.send(); 

             request.onload = function(){
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve(this.response);
                        console.log("OK");
                    }
                    else {
                    reject();
                    console.log('BAD');
                    }
                }
            } 
        });
    };

    convert()
        .then (response =>{
            console.log(response);
            let data = JSON.parse(response);
            inputUsd.value = inputRub.value/ data.usd;
        })
        .then( () => console.log(5000))
        .catch ( ()=> {
            inputUsd.value = "ХЗ что произошло"
        })

});

