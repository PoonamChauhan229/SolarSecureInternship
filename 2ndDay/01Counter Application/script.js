var number=document.getElementById('number')

var count=0;
function incrementCounter(){
    count++;
    number.innerHTML=count;
}

function decrementCounter(){
    count--;
    number.innerHTML=count;
}

function neutralCounter(){
    count=0
    number.innerHTML=count;
}
