function init () {
    let buttonBMI = document.getElementById("bmiCalc");
    buttonBMI.onclick = () => bmiCalc();
    var outputBMI = document.getElementById("outputBMI");

    let buttonRetire = document.getElementById("retireCalc");
    buttonRetire.onclick = () => retireCalc();
    var outputRetire = document.getElementById('outputRetire');
}

//function with standarts values, just to training
function bmiCalc(height = 1, weight = 0) {
    let name = document.querySelector('input[name="name"]').value || "user";
    if((height === 1) && (weight === 0)){
        height = document.querySelector('input[name="height"]').value || 1;
        weight = document.querySelector('input[name="weight"]').value || 0;
    }
    if ((height / (weight*weight))>=30) {
        outputBMI.textContent = `${name} you are overwheight.`;
    } else outputBMI.textContent = `${name} you are good!!! `;
    // return `${name} you are ${weight / (height *height)}.`
}


function retireCalc () {
    let contributor = document.getElementById('contributor').value || "Silvana";
    let sex = document.getElementById('sex').value || "F";
    let age = parseInt(document.getElementById('age').value) || 38;
    let contribution = parseInt(document.getElementById('contribution').value) || 23;
    


    if (sex === 'F') {
        if (((contribution + age) >= 85) && (contribution >= 30)) {
            outputRetire.textContent = `${contributor}, you can retire!`;
        } else outputRetire.textContent = `${contributor}, you can't retire yet.. :(`;
    } else if (sex === 'M') {
        if (((contribution + age) >= 95) && (contribution >= 35)) {
            outputRetire.textContent = `${contributor}, you can retire!`;
        } else outputRetire.textContent = `${contributor}, you can't retire yet.. :(`;
    }

}

window.onload = init();