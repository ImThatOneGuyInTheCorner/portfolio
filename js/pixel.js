
var index = 0;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("next").addEventListener(`click`, next);
    document.getElementById("back").addEventListener(`click`, back);
    testIndex();
});
function next() {
    if(index >= 2) {
        index = 2;
        return(error);
    }
    else
    {
        index++;
        reset();
        document.getElementById(index).style.order = 0;
    }
    testIndex();
    
}
function back() {
    if(index <= 0) {
        index = 0;
        return(error);
    }
    else
    {
        index--;
        reset();
        document.getElementById(index).style.order = 0;
    }
    testIndex();
}

function reset() {
    document.getElementById(0).style.order = 1;
    document.getElementById(1).style.order = 1;
    document.getElementById(2).style.order = 1;
}

function testIndex() {
    if(index == 0) {
        document.getElementById("back").style.cursor = 'not-allowed';
    }
    else {
        document.getElementById("back").style.cursor = 'pointer';
    }
    if(index == 2) {
        document.getElementById("next").style.cursor = 'not-allowed';
    }
    else {
        document.getElementById("next").style.cursor = 'pointer';
    }
}