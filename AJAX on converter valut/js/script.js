let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let reguest = new XMLHttpRequest();

    reguest.open('GET', 'js/current.json');
    reguest.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   
    reguest.send();

    
    
        
      

    reguest.addEventListener('readystatechange', function () {
        if (reguest.readyState === 4 && reguest.status == 200) {
            let data = JSON.parse(reguest.response);
            
            inputUsd.value = inputRub.value / data.usd; 
            
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    });
})