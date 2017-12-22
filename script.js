function moneyConverter(valNum) {
    var kurs = document.getElementById('inputcurs').value;
    //kurs = (+kurs);
    
    document.getElementById('outputrub').innerHTML = ((valNum * (+kurs)).toFixed(2));
};