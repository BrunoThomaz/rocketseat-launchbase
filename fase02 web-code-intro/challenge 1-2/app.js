function init () {
    let rocketButton = document.querySelector ('button#rocketData');
    rocketButton.onclick = () => rocketData();

    let newFieldButton = document.querySelector ('button#newField');
    newFieldButton.onclick = (event) => addField(event);

    let devButton = document.querySelector ('button#devData');
    devButton.onclick = () => devData();

}


function rocketData () {
    let company = document.getElementById('company').value || "RocketSeat";
    let color = document.getElementById('color').value || "Purple";
    let focus = document.getElementById('focus').value || "Coding";
    let output = document.getElementById('outputRocket')
    let address = {};
    address.street = document.getElementById('address').value || "Rua Guilherme Gambala";
    address.number = parseInt(document.getElementById('number').value) || 260;
    
    output.innerText = `The company ${company} is located in ${address.street}, ${address.number}`;
    console.log(`The company ${company} is located in ${address.street}, ${address.number}`)
}



function devData () {
    let name = document.getElementById('developer').value || 'Bruno Thomaz';
    let age = document.getElementById('age').value || '30';
    var technologies = [];
    let count = 0;
    for (knowledge of document.getElementsByClassName('knowledge')) {
        technologies[count] = {'nome':`${knowledge.value}`}
        count++;
    }
    count = 0;
    for (technology of technologies) {
        technology.especialidade = document.getElementsByClassName('specialty')[count].value;
        count++;
    }
    outputDev.textContent = `The user ${name} is ${age} years old and uses the technology ${technologies[0].nome} with ${technologies[0].especialidade} specialty`
}


//function to create a new knowledge field
function addField (element) {
    //create an add button.
    let el = element.target;
    let button = document.createElement("button");
    button.id = "newField";
    button.innerText = "+";
    button.onclick = (event) => addField(event);
    el.parentElement.insertBefore(button, el);
    // end add button.

    //create an input:text name.
    let name = document.createElement("input");
    name.type = "text";
    name.name = "name";
    name.className = "knowledge";
    name.placeholder = "Name";
    el.parentElement.insertBefore(name, el);
    // end input:text name.

    //create an input:text name.
    let specialty = document.createElement("input");
    specialty.type = "text";
    specialty.name = "specialty";
    specialty.className = "specialty";
    specialty.placeholder = "Specialty";
    el.parentElement.insertBefore(specialty, el);
    // end input:text name.

    //create a remove button.
    let buttonRemove = document.createElement("button");
    buttonRemove.id = "removeField";
    buttonRemove.innerText = "-";
    buttonRemove.onclick = () => removeField (event);
    el.parentElement.insertBefore(buttonRemove, el);
    // end remove button.
    el.remove();
}

//function to remove the knowledge field
function removeField (event) {
    let previous1 = event.target.previousElementSibling;
    let previous2 = previous1.previousElementSibling;
    let element = event.target;
    previous1.remove();
    previous2.remove();
    element.remove();
}

window.onload = init();